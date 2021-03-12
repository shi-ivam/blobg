import admin from "firebase-admin";
import formidable from "formidable";
import fs from 'fs';
import sharp from "sharp";
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';


// Models 

import post from '../../models/post.js';
import dbConnect from "../../utils/dbConnect.js";
import user from "../../models/user.js";



const serviceAccount = require("../../ushaj-f9500-firebase-adminsdk-s6435-52cc172444.json");

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
    const db = await dbConnect();
    const cookie = req.headers.cookie;
    const jwtUser = jwt.verify(cookie.split('=')[1],process.env.JWTSECRET);
    const foundUser = await user.findOne({id:jwtUser.userId});
    if (!foundUser){
        res.send({type:'failed',reason:'invalidauth'})
        return
    }
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
            fs.writeFileSync('./markdown/' + id + '.md', body);
            sharp(files.image.path)
                .extract({
                    width: Math.floor(parsedCrop.width),
                    height: Math.floor(parsedCrop.height),
                    left: Math.floor(parsedCrop.y),
                    top: Math.floor(parsedCrop.x),
                })
                .resize(500, 500)
                .toFile('./images/' + id + '.jpg')
                .then(function (new_file_info) {
                    console.log("Image cropped and saved");
                    var bucket = admin.storage().bucket();
                    bucket.upload("./images/" + id + '.jpg');
                    bucket.upload('./markdown/' + id + '.md');

                    function makeid(length) {
                        var result = '';
                        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                        var charactersLength = characters.length;
                        for (var i = 0; i < length; i++) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return result;
                    }

                    const slug = String(title.toLowerCase()).replace(/\s+/g,'-') + makeid(8);

                    post.create({id,author:foundUser.id,slug,body:id+'.md',title,thumb:id+'.jpg',tags})
                    .then((createdPost) => {
                        res.send({ type: 'created',post:createdPost });

                    })
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
