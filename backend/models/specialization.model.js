import { model, Schema, Types } from "mongoose";

const specializationSchema = new Schema(
  {
    strandId: {
      type: Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Specialization = model("specialization", specializationSchema);

export default Specialization;
