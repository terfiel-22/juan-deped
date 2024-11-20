import HttpError from "../utils/HttpError.utils.js";
import { StudentForm } from "../models/student.model.js";
import get from "lodash/get.js";

export const addStudentForm = async (req, res, next) => {
  try {
    const authId = get(req, "user._id");
    const email = get(req, "user.email");
    const learnerReferenceNo = get(req, "user.learnerReferenceNo");

    /** Error if student already submitted a form */
    const existingAuthId = await StudentForm.findOne({ authId });
    const existingEmail = await StudentForm.findOne({ email });
    const existingLRN = await StudentForm.findOne({ learnerReferenceNo });
    if (existingAuthId || existingEmail || existingLRN)
      throw new HttpError("You already submitted a form.", 400);

    // Create the student record.
    const newStudentFormData = {
      ...req.body,
      authId,
      email,
      learnerReferenceNo,
    };
    const studentForm = new StudentForm(newStudentFormData);

    const error = studentForm.validateSync();
    if (error) {
      throw new HttpError("Saving student form failed.", 400);
    }

    await studentForm.save();

    res.status(200).json(studentForm);
  } catch (error) {
    next(error);
  }
};

export const fetchStudentFormByAuthId = async (req, res, next) => {
  try {
    const { authId } = req.params;

    const studentForm = await StudentForm.findOne({ authId });
    if (!studentForm)
      throw new HttpError("Currently no student data on database.", 404);

    res.status(200).json(studentForm);
  } catch (error) {
    next(error);
  }
};
