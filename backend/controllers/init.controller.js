import bcrypt from "bcryptjs";
import uniqid from "uniqid";
import Subject from "../models/subject.model.js";
import Personnel from "../models/personnel.model.js";
import Auth from "../models/auth.model.js";
import subjects from "../_mockData/subjects.data.js";
import formattedPersonnels from "../_mockData/formattedPersonnels.data.js";
import admin from "../_mockData/admin.data.js";
import tracks from "../_mockData/tracks.data.js";
import HttpError from "../utils/HttpError.utils.js";
import {
  Specialization,
  Strand,
  Track,
} from "../models/track-strand-specialization.model.js";

export const initTrackStrandSpecialization = async (req, res, next) => {
  try {
    await Track.deleteMany({});
    await Strand.deleteMany({});
    await Specialization.deleteMany({});

    for (const track of tracks) {
      const trackDoc = await Track.create({
        code: uniqid(),
        name: track.name,
      });

      for (const strand of track.strands) {
        const strandDoc = await Strand.create({
          code: uniqid(),
          name: strand.name,
          trackCode: trackDoc.code,
        });

        for (const specialization of strand.specializations) {
          await Specialization.create({
            code: uniqid(),
            name: specialization.name,
            strandCode: strandDoc.code,
          });
        }
      }
    }

    res.status(201).json({
      message:
        "Tracks, Strands and Specialization data is successfully initialized.",
    });
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
