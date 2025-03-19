import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    const token = header ? header.split(" ")[1] : null;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token inválido o expirado" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
