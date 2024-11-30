import { model, Schema } from "mongoose";

const enrollmentSchedule = Schema(
  {
    title: { type: String, required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

const EnrollmentSchedule = model("Enrollment Schedule", enrollmentSchedule);

export default EnrollmentSchedule;
