import users from "../database";

const verifyUserAdmMiddleware = (req, res, next) => {
  
  const user = users.find((use) => use.email === req.user);
  const { uuid } = req.params || { uuid: " " };
  if (user.isAdm) {
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};

export default verifyUserAdmMiddleware;
