import {
  Specialization,
  Strand,
  Track,
} from "../models/track-strand-specialization.model.js";

export const fetchTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find({});

    res.status(200).json(tracks);
  } catch (error) {
    next(error);
  }
};

export const fetchStrands = async (req, res, next) => {
  try {
    const strands = await Strand.find({}).populate("track").exec();

    res.status(200).json(strands);
  } catch (error) {
    next(error);
  }
};

export const fetchSpecializations = async (req, res, next) => {
  try {
    const specializations = await Specialization.find({})
      .populate({
        path: "strand",
        populate: {
          path: "track",
          model: "Track",
        },
      })
      .exec();

    res.status(200).json(specializations);
  } catch (error) {
    next(error);
  }
};
