import likes from "../../../models/likes"
import dbConnect from "../../../utils/dbConnect";
import jwt from 'jsonwebtoken';
import user from '../../../models/user';

export default async (req,res) => {
    
    const db = await dbConnect();
    const cookie = req.headers.cookie;
    const jwtUser = jwt.verify(cookie.split('=')[1], process.env.JWTSECRET);
    const foundUser = await user.findOne({ id: jwtUser.userId });
    if (!foundUser) {
        res.send({ type: 'failed', reason: 'invalidauth' })
        return
    }
    
    const foundLike = await likes.findOne({userId:foundUser.id})

    if (foundLike){
        likes.deleteOne({postId:req.body.postId,userId:foundUser.id})
        .then(() => {console.log('deleted')})
        .catch(err => console.log(err))
    }
    else{
        likes.create({postId:req.body.postId,userId:foundUser.id})
    }
    res.send({type:'success'})
}