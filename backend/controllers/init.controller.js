import bcrypt from "bcryptjs";
import {
  AppliedSubject,
  CoreSubject,
  SpecializedSubject,
} from "../models/subject.model.js";
import PersonnelInformation from "../models/personnel/personnel-information.model.js";
import {
  coreSubjects,
  appliedSubjects,
  specializedSubjects,
} from "../_mockData/subjects.data.js";
import formattedPersonnels from "../_mockData/formattedPersonnels.data.js";
import admin from "../_mockData/admin.data.js";
import tracks from "../_mockData/tracks.data.js";
import HttpError from "../utils/HttpError.utils.js";
import {
  Specialization,
  Strand,
  Track,
} from "../models/school-management/track-strand-specialization.model.js";
import { DEFAULT_PROFILE_PIC as profilePic } from "../constants/DefaultFields.js";
import Personnel from "../models/personnel/personnel.model.js";

export const initTrackStrandSpecialization = async (req, res, next) => {
  try {
    const schoolYear = "2024-2025";
    await Track.deleteMany({});
    await Strand.deleteMany({});
    await Specialization.deleteMany({});

    for (const track of tracks) {
      const trackDoc = new Track({
        name: track.name,
        schoolYear,
      });

      for (const strand of track.strands) {
        const strandDoc = new Strand({
          name: strand.name,
          track: trackDoc._id,
        });

        for (const specialization of strand.specializations) {
          const specializationDoc = await Specialization.create({
            name: specialization.name,
            strand: strandDoc._id,
            track: trackDoc._id,
          });

          strandDoc.specializations.push(specializationDoc._id);
        }

        const savedStrandDoc = await strandDoc.save();
        trackDoc.strands.push(savedStrandDoc._id);
      }
      await trackDoc.save();
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
    await Promise.all([
      await CoreSubject.deleteMany({}),
      await AppliedSubject.deleteMany({}),
      await SpecializedSubject.deleteMany({}),
    ]);

    await Promise.all([
      await CoreSubject.insertMany(coreSubjects),
      await AppliedSubject.insertMany(appliedSubjects),
    ]);

    for (const specializedSubject of specializedSubjects) {
      for (const subject of specializedSubject.subjects) {
        await SpecializedSubject.create({
          strand: specializedSubject.strand,
          name: subject.name,
          areas: subject.areas,
        });
      }
    }

    res
      .status(201)
      .json({ message: "Subjects data is successfully initialized." });
  } catch (error) {
    next(error);
  }
};

export const initPersonnels = async (req, res, next) => {
  try {
    await PersonnelInformation.deleteMany({});
    await PersonnelInformation.insertMany(formattedPersonnels);

    res
      .status(201)
      .json({ message: "Personnels data is successfully initialized." });
  } catch (error) {
    next(error);
  }
};

export const initAdminAccount = async (req, res, next) => {
  try {
    await Personnel.deleteMany({});
    const { username, email, password, role } = admin;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userAdmin = new Personnel({
      username,
      email,
      password: hashedPassword,
      profilePic,
      role,
      isApproved: true,
    });

    if (!userAdmin) throw new HttpError("Invalid user data.", 400);

    await userAdmin.save();

    res.status(201).json(userAdmin);
  } catch (error) {
    next(error);
  }
};
