import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // 1️⃣ Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // extract token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

