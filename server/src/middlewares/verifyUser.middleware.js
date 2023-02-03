import users from "../database";

const verifyUserMiddleware = (req, res, next) => {

  const user = users.find((use) => use.email === req.user);
  const { uuid } = req.params || { uuid: " " };
  if (uuid === user.uuid || user.isAdm) {
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
};

export default verifyUserMiddleware;