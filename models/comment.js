import mongoose from 'mongoose';

const Comment = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    value:{
        type:String,
        required:true,
    },
    dateCreated:{
        type:Date,
        default:new Date(),
    },
    hearts:{
        type:Number,
        default:0,
    },
})



export default mongoose.models.comment || mongoose.model('comment', Comment);