import { model, Schema } from "mongoose";
import { LEARNERS_ENUM } from "../../constants/UserRoles.js";
import { DEFAULT_PROFILE_PIC } from "../../constants/DefaultFields.js";

const learnerSchema = Schema(
  {
    lrn: { type: String },
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true, default: DEFAULT_PROFILE_PIC },
    role: {
      type: String,
      required: true,
      enum: LEARNERS_ENUM,
    },
  },
  { timestamps: true }
);

const Learner = model("Learner", learnerSchema);

export default Learner;
