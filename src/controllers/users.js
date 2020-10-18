export const getUsers = (req, res, next) => {
  return res.status(200).json({ message: "Users" });
}