import { model, Schema } from "mongoose";

const trackSchema = new Schema({
  code: { type: String, unique: true, required: true },
  name: { type: String, required: true },
});

const strandSchema = new Schema({
  code: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  trackCode: { type: String, ref: "Track", required: true },
});

const specializationSchema = new Schema({
  code: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  strandCode: { type: String, ref: "Strand", required: true },
});

export const Track = model("Track", trackSchema);
export const Strand = model("Strand", strandSchema);
export const Specialization = model("Specialization", specializationSchema);
