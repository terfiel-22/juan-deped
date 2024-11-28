import { model, Schema, Types } from "mongoose";

const trackSchema = new Schema({
  name: { type: String, required: true },
  strands: [{ type: Types.ObjectId, ref: "Strand" }],
  schoolYear: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
});

const strandSchema = new Schema({
  name: { type: String, required: true },
  track: { type: Types.ObjectId, ref: "Track", required: true },
  specializations: [{ type: Types.ObjectId, ref: "Specialization" }],
});

const specializationSchema = new Schema({
  name: { type: String, required: true },
  strand: { type: Types.ObjectId, ref: "Strand", required: true },
  track: { type: Types.ObjectId, ref: "Track", required: true },
});

export const Track = model("Track", trackSchema);
export const Strand = model("Strand", strandSchema);
export const Specialization = model("Specialization", specializationSchema);
