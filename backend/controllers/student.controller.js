export const studentRegistration = async (req, res, next) => {
  try {
    const student = req.body;
    // Create an authentication
    // Get the authId and add on the student model
    res.status(200).json({ student });
  } catch (error) {
    next(error);
  }
};
