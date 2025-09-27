const user = require("../Model/User.model")
const UserService = require("../Service/User.service");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// zc

const Register = async (req, res) => {

    const { UserName, Email, Password } = req.body;
    const hashedpassword = await bcrypt.hash(Password, 10)

    try {
        const newUser = new user({ UserName, Email, Password: hashedpassword })
        await newUser.save()
        res.status(201).json({ message: "Registered successfully" })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const Login = async () => {

    const { Email, Password } = req.body;
    try {
        const login = user.findOne({ Email })

        const match = await bcrypt.compare(Password, login.Password)

        if (!match) {
            res.status(400).json({ message: "Invalid Creadentials" })
        }

        const tocken = jwt.sign({ id: user._id, login: Email, login: Password }, "mani123")
        res.json({ tocken, user: { id: user._id, login: Email, login: Password } })
    }
    catch (err) {
        res.status(401).json({ message: "Invalid Email or Password" })
    }
}


const getAllUsersController = async (req, res) => {
    try {
        const users = await UserService.GetAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getUserByIdController = async (req, res) => {
    try {
        const user = await UserService.GetUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateUserController = async (req, res) => {
    try {
        const user = await UserService.UpdateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const user = await UserService.DeleteUser(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const allusers = async (req, res) => {
    try {
        const users = await UserService.usersCount()
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    Register,
    Login,
    getAllUsersController,
    getUserByIdController,
    updateUserController,
    deleteUserController,
    allusers
}