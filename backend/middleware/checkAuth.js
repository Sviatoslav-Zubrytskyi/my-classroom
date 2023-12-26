import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    const {token} = req.body;
    console.log(`Received token: ${token}`)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};

