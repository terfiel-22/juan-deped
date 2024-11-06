import { model, Schema } from "mongoose";

const accountSchema = Schema(
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
const Account = model("Account", accountSchema);

export default Account;
