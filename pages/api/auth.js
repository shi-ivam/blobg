import user from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookie from 'cookie';

dotenv.config();

export default (req,res) => {
    dbConnect().then(
        () => {
            const {type,email,username,passwd,cpasswd} = req.body;
            if (type === 'login'){
                console.log(email,passwd)
                if (!email || !passwd){
                    res.send({type:"failed",reason:'emptyfields'})
                    return
                }
                user.findOne({email:email})
                .then((foundUser) => {
                    if (!!foundUser){
                        if (bcrypt.compareSync(passwd,foundUser.password) || passwd == foundUser.password){
                            const data = {
                                userId:foundUser.id,
                                createdAt:Date.now(),
                            }
                            const token = jwt.sign(data,process.env.JWTSECRET);
                            res.setHeader('Set-Cookie',cookie.serialize('auth',JSON.stringify(token),{
                                httpOnly:true,
                                secure:!process.env.NODE_ENV,
                                sameSite:'strict',
                                maxAge:3600,
                                path:'/'
                            }))
                            res.send({type:'success'})
                        }
                        else{
                            res.send({type:"failed",reason:'passworddoesntmatch'})
                        }
                    }
                    else{
                        res.send({type:'failed',reason:'usernotfound'})
                    }
                })
                .catch(err => {
                    res.send({type:"ni"});
                    console.log(err)
                })
            }
            else{
                console.log('signup');
                res.send({type:'signup'})
            }
        }
    )
    .catch(err => {console.log(err)})
}

export const config = {
    api: {
        bodyParser: true,
        cookieParser:true
    },
}