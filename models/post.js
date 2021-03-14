import mongoose from 'mongoose';

const Post = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
    body:{
        type:String,
        required:true,
    },
    thumb:{
        type:String,
    },
    tags:{
        type:Array
    },
    images:{
        type:Array
    },
    hearts:{
        type:Number,
        default:0,
    }

})


export default mongoose.models.post || mongoose.model('post',Post);