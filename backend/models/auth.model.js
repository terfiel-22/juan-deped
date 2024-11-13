import { model, Schema } from "mongoose";

const authSchema = Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    learnerReferenceNo: String,
    role: {
      type: String,
      required: true,
      enum: [
        "Administrator",
        "School Head",
        "Assistant Principal",
        "Registrar",
        "Admissions",
        "Subject Teacher",
        "Class Adviser",
        "Student",
        "Alumnus",
        "Parent/Guardian",
      ],
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Export Personnel Model
const Auth = model("Auth", authSchema);

export default Auth;
