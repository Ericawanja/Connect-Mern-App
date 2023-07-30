import User from "../models/user.js";

export const getUser = async (req, res) => {
   
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });
  
    // console.log(user);  
    // const {['password']:password, ...userData} = user
    // console.log(password, "here.....................", userData);
    res.status(200).json({ user: {id, firstname:user.firstName, lastname:user.lastName, picturePath: user.picturePath, friends:user.friends, location:user.location,occupation:user.occupation, viewedProfile:user.viewedProfile, impressions:user.impressions } });
  } catch (err) {
    const errorMsg = "An error occured, please try again later!";
    res.status(500).json({ message: errorMsg });
  }
};

export const getUserFriends = async (req,res)=>{

}

export const addRemoveFriend = async(req,res)=>{

}