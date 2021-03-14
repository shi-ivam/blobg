import post from "../../../models/post.js";
import dbConnect from "../../../utils/dbConnect.js";
import admin from "firebase-admin";
import fs from 'fs';
import https from 'https';
import showdown from 'showdown';
import moment from 'moment';


const serviceAccount = require("../../../ushaj-f9500-firebase-adminsdk-s6435-52cc172444.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "gs://ushaj-f9500.appspot.com",
    });
}

export default (req, res) => {
    dbConnect()
        .then(() => {
            const {id} = req.query;
            console.log(id)
            post.findOne({ slug:id })
                .then((foundPost) => {
                    if (foundPost) {
                        var bucket = admin.storage().bucket();
                        const file = bucket.file(foundPost.body);
                        file.getSignedUrl({
                            action: 'read',
                            expires: moment().add(3, 'days').format('MM-DD-YYYY')
                        }).then(signedUrls => {
                            const file = fs.createWriteStream('./markdown/' + foundPost.body);
                            const request = https.get(signedUrls[0], function (response) {
                                response.pipe(file)
                                    .on('finish', async () => {

                                        const converter = new showdown.Converter();
                                        const val = fs.readFileSync('./markdown/' + foundPost.body);
                                        let text = val.toString();
                                        for (let x = 0; x < foundPost.images.length; x++){
                                            const img = await bucket.file(foundPost.author+'====='+foundPost.images[x].id + '.jpg').getSignedUrl({
                                                action: 'read',
                                                expires: moment().add(3, 'days').format('MM-DD-YYYY')
                                            })
                                            text = text.replace(new RegExp(foundPost.images[x].id,'g'),img[0]);
                                        }
                                        const html = converter.makeHtml(text);
                                        const thumb = foundPost.thumb === 'none' ? [''] : await bucket.file(foundPost.thumb).getSignedUrl({
                                            action: 'read',
                                            expires: moment().add(3, 'days').format('MM-DD-YYYY')
                                        })
                                                                                // link on first index
                                        res.send({type:'success', html, title: foundPost.title ,thumb:thumb[0]});
                                    })
                            });
                        })
                            .catch(err => res.send(err))
                    }
                    else {
                        res.send({ type: 'failed' })
                    }
                })
        })
        .catch(err => console.log(err))

}