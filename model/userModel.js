import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        name:{type:String },
        email:{type:String , unique:true , required:true},
        phoneNumber:{type:Number},
        password:{type:String}
    },
    {
        timestamps:true
    }
)

const User = mongoose.model("users",userSchema)
export default User