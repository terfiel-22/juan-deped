import { model, Schema, Types } from "mongoose";

const trackSchema = new Schema({
  name: { type: String, required: true },
});

const strandSchema = new Schema({
  name: { type: String, required: true },
  track: { type: Types.ObjectId, ref: "Track", required: true },
});

const specializationSchema = new Schema({
  name: { type: String, required: true },
  strand: { type: Types.ObjectId, ref: "Strand", required: true },
});

export const Track = model("Track", trackSchema);
export const Strand = model("Strand", strandSchema);
export const Specialization = model("Specialization", specializationSchema);
