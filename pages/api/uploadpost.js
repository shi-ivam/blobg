
import admin from 'firebase-admin';
import formidable from 'formidable';

var serviceAccount = require("../../ushaj-f9500-firebase-adminsdk-s6435-52cc172444.json");

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: "gs://ushaj-f9500.appspot.com"
    });
}



export const config = {
    api: {
        bodyParser: false,
    },
};
  
export default async (req,res) => {
    if (req.method === 'POST'){
        const form = new formidable.IncomingForm();
        form.uploadDir = "./markdown/";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          console.log(files.file.path)
          console.log(typeof files)
          var bucket = admin.storage().bucket();
          bucket.upload('./' + files.file.path)
          res.send('cool')
        });
    }
    else{
        res.send('GET')
    }
}