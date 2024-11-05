import tracks from "../_mockData/tracks.data.js";
import subjects from "../_mockData/subjects.data.js";
import formattedPersonnels from "../_mockData/formattedPersonnels.data.js";
import Track from "../models/track.model.js";
import Subject from "../models/subject.model.js";
import Personnel from "../models/personnel.model.js";

export const initTracks = async (req, res, next) => {
  try {
    await Track.deleteMany({});
    await Track.insertMany(tracks);

    res
      .status(201)
      .json({ message: "Tracks data is successfully initialized." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
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
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
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
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
