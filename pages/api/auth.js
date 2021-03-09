import user from '../../models/user';
import dbConnect from '../../utils/dbConnect';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookie from 'cookie';
import {v4} from 'uuid';

dotenv.config();

export default (req,res) => {
    dbConnect().then(
        () => {
            let {type,email,username,passwd,cpasswd} = req.body;
            
            if (type === 'login'){
                console.log(email,passwd)
                if (!email || !passwd){
                    res.send({type:"failed",reason:'emptyfields'})
                    return
                }
                email = email.trim();
                passwd = passwd.trim();
                user.findOne({email:email})
                .then((foundUser) => {
                    if (!!foundUser){
                        if (bcrypt.compareSync(passwd,foundUser.password) || passwd == foundUser.password){
                            const data = {
                                userId:foundUser.id,
                                createdAt:Date.now(),
                            }
                            const token = jwt.sign(data,process.env.JWTSECRET);
                            console.log('New Token:',token);
                            res.setHeader('Set-Cookie',cookie.serialize('auth',token,{
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
                console.log('Signup')
                if (!email || !passwd || !username || !cpasswd){
                    console.log('Empty values')
                    res.send({type:'failed',reason:'incompletedata'})
                    return
                }
                email = email.trim();
                passwd = passwd.trim();
                username = username.trim();
                cpasswd = cpasswd.trim();
                if (passwd !== cpasswd){
                    res.send({type:'failed',reason:'passwordsdontmatch'});
                    return
                }
                user.findOne({$or:[{email},{username}]})
                .then((foundUser) => {
                    if (!!foundUser){
                        res.send({type:"failed",reason:"useralreadyexists"})
                    }
                    else{
                        const id = v4();
                        const pass = bcrypt.hashSync(passwd,bcrypt.genSaltSync(Number(process.env.BCRYPT_ROUNDS)));
                        user.create({id,email,username,password:pass})
                        .then(() => {
                            const data = {
                                userId:id,
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
                        })
                        .catch(err => console.error(err))
                    }
                })
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