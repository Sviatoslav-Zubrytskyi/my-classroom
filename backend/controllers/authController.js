import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const {fName, lName, email, password} = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({fName, lName, email, password: hashedPassword});
        await newUser.save();

        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET);
        res.json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        // Find the user by email
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'Invalid email'});
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid password'});
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({user}, process.env.JWT_SECRET);
        res.json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getUser = async (req, res) => {
    const user = req.user;
    console.log(`user: ${user}`);
    res.json({user});
}