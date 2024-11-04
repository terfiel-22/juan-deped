import tracks from "../_mockData/tracks.data.js";
import Track from "../models/track.model.js";

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
