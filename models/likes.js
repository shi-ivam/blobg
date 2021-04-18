import mongoose from 'mongoose';
import {v4} from 'uuid';

const Likes = mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:v4()
    },
    userId:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
        
    }
})



export default mongoose.models.like || mongoose.model('like', Likes);