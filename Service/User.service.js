const userModel = require("../Model/User.model")

const GetAllUsers = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (err) {
        console.log(err, "get all users error in service layer");
    }
};

const GetUserById = async (id) => {
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (err) {
        console.log(err, "get user by id error in service layer");
    }
};

const UpdateUser = async (id, data) => {
    try {
        const user = await userModel.findByIdAndUpdate(id, data, { new: true });
        return user;
    } catch (err) {
        console.log(err, "update user error in service layer");
    }
};

const DeleteUser = async (id) => {
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
    } catch (err) {
        console.log(err, "delete user error in service layer");
    }
};

// here i am using aggreation for analytics dashboard for total users

const usersCount = async () => {
    try {
        const userscount = await userModel.aggregate([
           { $group:{ _id:null, totalusers: { $sum: 1 } }}
        ])
        return userscount;
    } catch (error) {

    }
}




module.exports = {
    GetAllUsers,
    GetUserById,
    UpdateUser,
    DeleteUser,
    usersCount
};
