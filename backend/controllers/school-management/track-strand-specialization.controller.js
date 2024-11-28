import HttpError from "../../utils/HttpError.utils.js";
import {
  Specialization,
  Strand,
  Track,
} from "../../models/school-management/track-strand-specialization.model.js";

/** TRACKS */
export const fetchTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find().select([
      "name",
      "schoolYear",
      "isAvailable",
    ]);

    res.status(200).json(tracks);
  } catch (error) {
    next(error);
  }
};
export const fetchTrackById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const track = await Track.findById(id);
    if (!track) throw new HttpError("Track not found.", 404);

    res.status(200).json(track);
  } catch (error) {
    next(error);
  }
};

/** STRANDS */
export const fetchStrands = async (req, res, next) => {
  try {
    const strandList = await Strand.find()
      .select(["name", "track"])
      .populate("track");

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
export const fetchStrandById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const strand = await Strand.findById(id);
    if (!strand) throw new HttpError("Strand not found.", 404);

    res.status(200).json(strand);
  } catch (error) {
    next(error);
  }
};
export const fetchStrandsByTrackId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const strandList = await Strand.find({ track: id })
      .populate("track")
      .exec();

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

/** SPECIALIZATIONS */
export const fetchSpecializations = async (req, res, next) => {
  try {
    const specializationList = await Specialization.find()
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
export const fetchSpecializationById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const specialization = await Specialization.findById(id);
    if (!specialization) throw new HttpError("Specialization not found.", 404);

    res.status(200).json(specialization);
  } catch (error) {
    next(error);
  }
};
export const fetchSpecializationsByStrandId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const specializationList = await Specialization.find({ strand: id })
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
