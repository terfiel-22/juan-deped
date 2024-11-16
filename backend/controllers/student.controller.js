import HttpError from "../utils/HttpError.utils.js";
import { StudentForm } from "../models/student.model.js";

export const addStudentForm = async (req, res, next) => {
  try {
    const authId = "6734774937a62118e7057df9"; // Change after fixing middleware

    // Create the student record.
    const newStudentFormData = {
      authId,
      ...req.body,
    };
    const studentForm = new StudentForm(newStudentFormData);

    const error = studentForm.validateSync();
    if (error) {
      // TODO: Display Validation Error on Frontend
      throw new HttpError("Creating new student form failed.", 400);
    }

    await studentForm.save();

    res.status(200).json(studentForm);
  } catch (error) {
    next(error);
  }
};
