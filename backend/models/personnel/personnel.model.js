import { model, Schema } from "mongoose";
import { PERSONNELS_ENUM } from "../../constants/UserRoles.js";
import { DEFAULT_PROFILE_PIC } from "../../constants/DefaultFields.js";

const personnelSchema = Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true, default: DEFAULT_PROFILE_PIC },
    role: {
      type: String,
      required: true,
      enum: PERSONNELS_ENUM,
    },
  },
  { timestamps: true }
);

const Personnel = model("Personnel", personnelSchema);

export default Personnel;
