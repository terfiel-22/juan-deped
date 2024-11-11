export const studentRegistration = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Successfully Registered." });
  } catch (error) {
    next(error);
  }
};
