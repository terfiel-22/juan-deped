import { model, Schema } from "mongoose";
import { LEARNERS_ENUM } from "../../constants/UserRoles";

const learnerSchema = Schema(
  {
    lrn: { type: String },
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
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
