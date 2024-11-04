import { model, Schema } from "mongoose";

// Specialization Schema
const specializationSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
});

// Strand Schema
const strandSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  specializations: [specializationSchema],
});

// Track Schema
const trackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    strands: [strandSchema],
  },
  { timestamps: true }
);

// Export Track Model
const Track = model("Track", trackSchema);

export default Track;
