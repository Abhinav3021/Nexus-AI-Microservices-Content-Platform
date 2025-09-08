import jwt, {} from "jsonwebtoken";
export const isAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            res.status(401).json({
                message: "Please Login- No auth header"
            });
            return;
        }
        const token = authHeader.split(" ")[1];
        const jwtSecret = process.env.JWT_SEC;
        if (!jwtSecret) {
            res.status(500).json({
                message: "JWT secret not configured on server"
            });
            return;
        }
        const decodeValue = jwt.verify(token, jwtSecret);
        if (!decodeValue || !decodeValue.user) {
            res.status(401).json({
                message: "Invalid token"
            });
            return;
        }
        req.user = decodeValue.user;
        next();
    }
    catch (error) {
        console.log("JWT verification error:", error);
        res.status(401).json({
            message: "Please Login-JWT error",
        });
    }
};
//# sourceMappingURL=isAuth.js.map