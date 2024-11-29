import bcrypt from "bcryptjs";
import HttpError from "../../utils/HttpError.utils.js";
import Personnel from "../../models/personnel/personnel.model.js";
import { DEFAULT_PROFILE_PIC } from "../../constants/DefaultFields.js";

export const createPersonnel = async (req, res, next) => {
  try {
    const { username, email, password, cpassword, role } = req.body;

    /** Validations */
    if (!username || !email || !password || !cpassword || !role)
      throw new HttpError("Fill all required fields.", 400);

    if (password !== cpassword)
      throw new HttpError("Password confirmation does not matched.", 400);

    const personnelByEmail = await Personnel.findOne({ email });
    if (personnelByEmail)
      throw new HttpError("Email address already exist.", 400);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPersonnel = new Personnel({
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!newPersonnel) {
      throw new HttpError("Creating new personnel failed.", 400);
    }

    const savedPersonnel = await newPersonnel.save();

    res.status(200).json({
      _id: savedPersonnel._id,
      username: savedPersonnel.username,
      email: savedPersonnel.email,
      profilePic: DEFAULT_PROFILE_PIC,
      role: savedPersonnel.role,
    });
  } catch (error) {
    next(error);
  }
};
