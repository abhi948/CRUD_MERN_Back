import User from '../model/userModel.js';

export const create = async(req,res)=>{
    try {
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({errorMessage:'User Already Exist'});
        }

        const saveData = await newUser.save();
        // res.status(200).json(saveData);
        res.status(200).json({message:"User Created Successfully"});
    } catch (error) {
        res.status(500).json({errorMessage:'Internal Server error'});
    }
}; 

export const getUser = async(req, res)=>{
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({errorMessage:"Not found User"});
        }
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json({errorMessage:"Internal server error"});
    }
};

export const getUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({errorMessage:"Not found User"});
        }
        return res.status(200).json(userExist);
    } catch (error) {
        return res.status(500).json({errorMessage:"Internal server error"});
    }
};

export const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({errorMessage:"Not found User"});
        }
        const updateUserDate = await User.findByIdAndUpdate(id, req.body, {new:true})
        // return res.status(200).json(updateUserDate);        
        res.status(200).json({message:"User Updated Successfully"});
    } catch (error) {
        return res.status(500).json({errorMessage:"Internal server error"});
    }
}

export const deleteUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({errorMessage:"Not found User"});
        }
        const deletedUserDate = await User.findByIdAndDelete(id);
        res.status(200).json({message:"User Deleted Successfully"});
        // return res.status(200).json(deletedUserDate);
    } catch (error) {
        return res.status(500).json({errorMessage:"Internal server error"});
    }
}