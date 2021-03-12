import post from "../../models/post.js";
import dbConnect from "../../utils/dbConnect.js";
import admin from "firebase-admin";
import fs from 'fs';
import https from 'https';
import showdown from 'showdown';
import moment from 'moment';
const serviceAccount = require("../../ushaj-f9500-firebase-adminsdk-s6435-52cc172444.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "gs://ushaj-f9500.appspot.com",
    });
}
export default (req, res) => {
    dbConnect()
        .then(() => {
            post.findOne({ id: '2dd9605b-4ed9-4ec1-8be6-f67352b32785' })
                .then((foundPost) => {
                    if (foundPost) {
                        var bucket = admin.storage().bucket();
                        const file = bucket.file(foundPost.body);
                        file.getSignedUrl({
                            action: 'read',
                            expires: moment().add(3,'days').format('MM-DD-YYYY')
                        }).then(signedUrls => {
                            const file = fs.createWriteStream('./markdown/'+foundPost.body);
                            const request = https.get(signedUrls[0], function (response) {
                                response.pipe(file)
                                .on('finish',() => {

                                    const converter = new showdown.Converter();
                                    const val       = fs.readFileSync('./markdown/' + foundPost.body);
                                    const text      = val.toString();
                                    const html      = converter.makeHtml(text);
                                    res.send(html);
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