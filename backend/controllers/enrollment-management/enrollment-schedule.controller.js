import EnrollmentSchedule from "../../models/enrollment-management/enrollment-schedule.model.js";
import HttpError from "../../utils/HttpError.utils.js";

export const createEnrollmentSchedule = async (req, res, next) => {
  try {
    const { title, start, end, color } = req.body;

    if (!title | !start | !end | !color)
      throw new HttpError("Fill all required data.", 400);

    const savedEnrollmentSchedule = await EnrollmentSchedule.create({
      title,
      start,
      end,
      color,
    });

    res.status(200).json({
      message: "Enrollment Schedule successfully added.",
      result: savedEnrollmentSchedule,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchEnrollmentSchedules = async (req, res, next) => {
  try {
    const enrollmentSchedules = await EnrollmentSchedule.find();
    res.status(200).json(enrollmentSchedules);
  } catch (error) {
    next(error);
  }
};

export const editEnrollmentSchedule = async (req, res, next) => {
  try {
    const { _id, title, start, end, color } = req.body;

    if (!_id | !title | !start | !end | !color)
      throw new HttpError("Fill all required data.", 400);

    const values = { title, start, end, color };
    const result = await EnrollmentSchedule.findByIdAndUpdate(_id, values, {
      new: true,
      runValidators: true,
    });

    if (!result) throw new HttpError("Enrollment Schedule not found.", 404);

    return res.status(200).json({
      message: "Enrollment Schedule successfully updated.",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEnrollmentSchedule = async (req, res, next) => {
  try {
    const { enrollmentScheduleId } = req.params;

    const deletedEnrollmentSchedule =
      await EnrollmentSchedule.findByIdAndDelete(enrollmentScheduleId);

    if (!deletedEnrollmentSchedule)
      throw new HttpError("Enrollment Schedule not found.", 404);

    return res.status(200).json({
      message: "Enrollment Schedule successfully deleted.",
      result: deletedEnrollmentSchedule,
    });
  } catch (error) {
    next(error);
  }
};
