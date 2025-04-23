const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");
const User = require('../models/user');

const auth = {
    // Middleware to check if the user is authenticated
    checkAuth: async (req, res, next) => {
        try {
            // get the token from the cookie
            const token = req.cookies.token;

            // if the token does not exist, return an error
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // verify the token
            const decoded = jwt.verify(token, JWT_SECRET);

            // set the user in the request object
            req.userId = decoded.userId;
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

        next();
    },
    // Middleware to check for the roles
    allowRoles: (roles) => {
        return async (req, res, next) => {
            try {
                // get the userId from the request object
                const userId = req.userId;

                // get the user from the database
                const user = await User.findById(userId);

                // check if the user has the required role
                if (!roles.includes(user.role)) {
                    return res.status(403).json({ message: 'Access Forbidden' });
                }

                next();
            } catch (err) {
                res.status(500).json({ message: 'Access Forbidden' });
            }
        }
    }
}

module.exports = auth;
