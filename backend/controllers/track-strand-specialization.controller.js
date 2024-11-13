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
    const strandList = await Strand.find({}).populate("track").exec();

    let strands = [];
    strandList.forEach(({ _id, name, track }) => {
      strands.push({
        _id,
        name,
        track: track.name,
      });
    });

    res.status(200).json(strands);
  } catch (error) {
    next(error);
  }
};

export const fetchSpecializations = async (req, res, next) => {
  try {
    const specializationList = await Specialization.find({})
      .populate({
        path: "strand",
        populate: {
          path: "track",
          model: "Track",
        },
      })
      .exec();

    let specializations = [];
    specializationList.forEach(({ _id, name, strand }) => {
      specializations.push({
        _id,
        name,
        strand: strand.name,
        track: strand.track.name,
      });
    });

    res.status(200).json(specializations);
  } catch (error) {
    next(error);
  }
};
