import { model, Schema } from "mongoose";

const strandSchema = new Schema(
  {
    trackId: {
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

const Strand = model("strand", strandSchema);

export default Strand;
