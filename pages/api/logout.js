import dbConnect from '../../utils/dbConnect.js';
import jwt from 'jsonwebtoken';
import user from '../../models/user.js';
import { serialize } from 'cookie';


export default async (req, res) => {
    await dbConnect();
    const cookie = req.headers.cookie;
    console.log(cookie)
    if (cookie) {
        const jwtUser = jwt.verify(cookie.split('=')[1], process.env.JWTSECRET);
        const foundUser = await user.findOne({ id: jwtUser.userId });
        if (!foundUser) {
            res.redirect('/')
            return
        } else {
            res.setHeader('Set-Cookie', [
                serialize('auth', '', {
                    maxAge: -1,
                    path: '/',
                }),
            ]);

            res.writeHead(302, { Location: '/' });
            res.end();
        }
    }
    else {

        res.redirect('/')
    }
}