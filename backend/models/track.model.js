import { model, Schema } from "mongoose";

const trackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Track = model("track", trackSchema);

export default Track;
