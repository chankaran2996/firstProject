import User from "../model/userModel.js";


export const regiter = async (req,res) => {
    const {name ,email,phoneNumber,password} = req.body;
    try {
        const user = await User.create({
            name ,email,phoneNumber,password
        })

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}