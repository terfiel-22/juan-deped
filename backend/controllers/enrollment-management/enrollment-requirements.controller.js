import EnrollmentRequirement from "../../models/enrollment-management/enrollment-requirement.model.js";
import HttpError from "../../utils/HttpError.utils.js";

export const createEnrollmentRequirement = async (req, res, next) => {
  try {
    const { name, description, requirementFor, submissionDeadline } = req.body;

    if (!name || !requirementFor || !submissionDeadline)
      throw new HttpError("Fill all fields.", 400);

    const requirementData = {
      name,
      description,
      requirementFor,
      submissionDeadline,
    };

    const newRequirement = new EnrollmentRequirement(requirementData);
    if (!newRequirement)
      throw new HttpError("Creating new requirement failed.", 400);

    await newRequirement.save();

    res.status(200).json({
      message: "Successfully added new requirement.",
      result: newRequirement,
    });
  } catch (error) {
    next(error);
  }
};

export const editEnrollmentRequirement = async (req, res, next) => {
  try {
    const { _id, name, description, requirementFor, submissionDeadline } =
      req.body;

    if (!name || !requirementFor || !submissionDeadline)
      throw new HttpError("Fill all fields.", 400);

    const requirementData = {
      name,
      description,
      requirementFor,
      submissionDeadline,
    };

    const updatedRequirement = await EnrollmentRequirement.findByIdAndUpdate(
      _id,
      requirementData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedRequirement)
      throw new HttpError("Updating requirement failed.", 400);

    res.status(200).json({
      message: "Successfully updated requirement.",
      result: updatedRequirement,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEnrollmentRequirement = async (req, res, next) => {
  try {
    const { enrollmentRequirementId } = req.params;

    const deletedRequirement = await EnrollmentRequirement.findByIdAndDelete(
      enrollmentRequirementId
    );

    if (!deletedRequirement)
      throw new HttpError("Enrollment Requirement not found.", 404);

    res.status(200).json({
      message: "Successfully deleted requirement.",
      result: deletedRequirement,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchEnrollmentRequirements = async (req, res, next) => {
  try {
    const enrollmentRequirements = await EnrollmentRequirement.find();
    res.json(enrollmentRequirements);
  } catch (error) {
    next(error);
  }
};
