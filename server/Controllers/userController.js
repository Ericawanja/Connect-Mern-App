import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res
      .status(200)
      .json({
        user: {
          id,
          firstname: user.firstName,
          lastname: user.lastName,
          picturePath: user.picturePath,
          friends: user.friends,
          location: user.location,
          occupation: user.occupation,
          viewedProfile: user.viewedProfile,
          impressions: user.impressions,
        },
      });
  } catch (err) {
    const errorMsg = "An error occured, please try again later!";
    res.status(500).json({ message: errorMsg });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const {id} = req.params
   

    const user = await User.findById(id)
    if(!user) return res.status(404).json({message:"User not found"})

    const friends = await Promise.all(
      user.friends.map((id)=>User.findById(id))
    )


    res.status(200).json({data:{friends}})
  } catch (err) {
    res.status(500).json({message:"An error ocucred.Please try again later"});
  }
};

export const addRemoveFriend = async (req, res) => {
  console.log("running...")
  try{
    const {id, friendId} = req.params
   
    const user = await User.findById(id)
    const friend = await User.findById(friendId)
    if(!user || !friend) return res.status(404).json({message:"User not found"})

    if(user.friends.includes(friendId)){
     //Remove
     console.log(user.friends, friend.friends)
     const userIndex = user.friends.indexOf(friendId)
     const friendIndex = friend.friends.indexOf(id)
     console.log(userIndex, friendIndex)
     user.friends.splice(userIndex,1 )
     friend.friends.splice(friendIndex,1)
     await user.save()
     await friend.save()
     return res.status(200).json({message: "The friend successsfully removed"})
    }
    //Add
   user.friends.push(friendId)
   friend.friends.push(id)
   
    await user.save()
    await friend.save()

    return res.status(200).json({message: "The friend succesfully added"})
    

  }catch(err){
res.status(500).json({err})
  }
};
