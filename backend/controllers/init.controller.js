import bcrypt from "bcryptjs";
import Track from "../models/track.model.js";
import Subject from "../models/subject.model.js";
import Personnel from "../models/personnel.model.js";
import Auth from "../models/auth.model.js";
import tracks from "../_mockData/tracks.data.js";
import subjects from "../_mockData/subjects.data.js";
import formattedPersonnels from "../_mockData/formattedPersonnels.data.js";
import admin from "../_mockData/admin.data.js";
import HttpError from "../utils/HttpError.utils.js";

export const initTracks = async (req, res, next) => {
  try {
    await Track.deleteMany({});
    await Track.insertMany(tracks);

    res
      .status(201)
      .json({ message: "Tracks data is successfully initialized." });
  } catch (error) {
    next(error);
  }
};

export const initSubjects = async (req, res, next) => {
  try {
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);

    res
      .status(201)
      .json({ message: "Subjects data is successfully initialized." });
  } catch (error) {
    next(error);
  }
};

export const initPersonnels = async (req, res, next) => {
  try {
    await Personnel.deleteMany({});
    await Personnel.insertMany(formattedPersonnels);

    res
      .status(201)
      .json({ message: "Personnels data is successfully initialized." });
  } catch (error) {
    next(error);
  }
};

export const initAdminAccount = async (req, res, next) => {
  try {
    await Auth.deleteMany({});

    const { username, password, role } = admin;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userAdmin = new Auth({
      username,
      password: hashedPassword,
      role,
    });

    if (!userAdmin) throw new HttpError("Invalid user data.", 400);

    await userAdmin.save();

    res.status(201).json(userAdmin);
  } catch (error) {
    next(error);
  }
};
