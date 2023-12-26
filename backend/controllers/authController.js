import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(`hashed password: ${hashedPassword}`)
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        res.json({message: 'User registered successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(`received password: ${password}`)
        // Find the user by email
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        // Generate a JWT token for authentication
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({token});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}