import admin from "firebase-admin";
import formidable from "formidable";
import fs from 'fs';
import sharp from "sharp";
import {v4} from 'uuid';

var serviceAccount = require("../../ushaj-f9500-firebase-adminsdk-s6435-52cc172444.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "gs://ushaj-f9500.appspot.com",
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async (req, res) => {
    if (req.method === "POST") {
        const form = new formidable.IncomingForm();
        form.uploadDir = "./images/";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            const id = v4();
            const title = fields.title;
            const body = fields.body;
            const tags = JSON.parse(fields.tags);
            const parsedCrop = JSON.parse(fields.crop);
            fs.writeFileSync('./markdown/'+id+'.md',body);
            sharp(files.image.path)
                .extract({
                    width: Math.floor(parsedCrop.width),
                    height: Math.floor(parsedCrop.height),
                    left: Math.floor(parsedCrop.y),
                    top: Math.floor(parsedCrop.x),
                })
                .resize(500, 500)
                .toFile('./images/'+id + '.jpg')
                .then(function (new_file_info) {
                    console.log("Image cropped and saved");
                    var bucket = admin.storage().bucket();
                    bucket.upload("./images/" + id + '.jpg');
                    bucket.upload('./markdown/'+id+'.md',{folder:'markdown'})
                    res.send("cool");
                })
                .catch(function (err) {
                    console.log("An error occured");
                    console.log(err);
                });
        });
    } else {
        res.send("GET");
    }
};
