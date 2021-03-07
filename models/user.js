import mongoose from 'mongoose';

const User = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})



export default mongoose.models.user || mongoose.model('user', User);