import { model, Schema } from "mongoose";

const enrollmentSchedule = Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

const EnrollmentSchedule = model("Enrollment Schedule", enrollmentSchedule);

export default EnrollmentSchedule;
