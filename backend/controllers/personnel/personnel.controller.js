import bcrypt from "bcryptjs";
import HttpError from "../../utils/HttpError.utils.js";
import Personnel from "../../models/personnel/personnel.model.js";
import { DEFAULT_PROFILE_PIC } from "../../constants/DefaultFields.js";
import generateTokenAndSetCookie from "../../utils/generateTokenAndSetCookie.js";

export const loginPersonnel = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const personnel = await Personnel.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      personnel?.password || ""
    );

    if (!personnel || !isPasswordCorrect)
      throw new HttpError("Invalid credentials.", 400);

    generateTokenAndSetCookie(personnel._id, res);

    res.status(200).json({
      _id: personnel._id,
      username: personnel.username,
      email: personnel.email,
      profilePic: personnel.profilePic,
      role: personnel.role,
    });
  } catch (error) {
    next(error);
  }
};

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
      message: "Personnel Account successfully added,",
      result: {
        _id: savedPersonnel._id,
        username: savedPersonnel.username,
        email: savedPersonnel.email,
        role: savedPersonnel.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const fetchPersonnels = async (req, res, next) => {
  try {
    const personnels = await Personnel.find().select([
      "_id",
      "username",
      "email",
      "role",
    ]);
    res.status(200).json(personnels);
  } catch (error) {
    next(error);
  }
};

export const editPersonnel = async (req, res, next) => {
  try {
    const { _id, username, email, password, cpassword, role } = req.body;

    if (!_id | !username | !email | !role)
      throw new HttpError("Fill all required data.", 400);

    const userByEmail = await Personnel.findOne({ email });
    if (userByEmail && userByEmail._id.toString() !== _id)
      throw new HttpError("Email address already exist.", 400);

    let values = {
      username,
      email,
      role,
    };

    if (password) {
      if (password !== cpassword)
        throw new HttpError("Password confirmation does not matched.", 400);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      values = {
        ...values,
        password: hashedPassword,
      };
    }

    const updatedPersonnel = await Personnel.findByIdAndUpdate(_id, values, {
      new: true,
      runValidators: true,
    });
    if (!updatedPersonnel) throw new HttpError("User not found.", 404);

    const result = await Personnel.findById(updatedPersonnel._id).select([
      "_id",
      "username",
      "email",
      "role",
    ]);

    return res.status(200).json({
      message: "Account is successfully updated.",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePersonnel = async (req, res, next) => {
  try {
    const { personnelId } = req.params;

    const deletedPersonnel = await Personnel.findByIdAndDelete(personnelId);

    if (!deletedPersonnel) throw new HttpError("User not found.", 404);

    return res.status(200).json({
      message: "Account is successfully deleted.",
      result: deletedPersonnel,
    });
  } catch (error) {
    next(error);
  }
};
