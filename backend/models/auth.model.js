import { model, Schema } from "mongoose";

const authSchema = Schema(
  {
    password: { type: String, required: true },
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
  },
  { timestamps: true }
);

// Export Personnel Model
const Auth = model("Auth", authSchema);

export default Auth;
