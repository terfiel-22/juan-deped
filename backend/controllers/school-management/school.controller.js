import School from "../../models/school-management/school.model.js";
import HttpError from "../../utils/HttpError.utils.js";

export const saveSchoolData = async (req, res, next) => {
  try {
    const {
      schoolId,
      schoolName,
      district,
      division,
      region,
      semester,
      beginningOfSemDate,
      endOfSemDate,
      schoolYear,
      schoolHead,
      schoolHeadDesignation,
      assistantPrincipal,
      assistantPrincipalDesignation,
    } = req.body;

    if (
      !schoolId ||
      !schoolName ||
      !district ||
      !division ||
      !region ||
      !semester ||
      !beginningOfSemDate ||
      !endOfSemDate ||
      !schoolYear ||
      !schoolHead ||
      !schoolHeadDesignation ||
      !assistantPrincipal ||
      !assistantPrincipalDesignation
    )
      throw new HttpError("Fill all fields.", 400);

    const schoolData = {
      schoolId,
      schoolName,
      district,
      division,
      region,
      semester,
      beginningOfSemDate,
      endOfSemDate,
      schoolYear,
      schoolHead,
      schoolHeadDesignation,
      assistantPrincipal,
      assistantPrincipalDesignation,
    };

    const existingSchool = await School.findOne({ schoolId });
    if (!existingSchool) {
      // Create New
      const newSchool = new School(schoolData);
      if (!newSchool)
        throw new HttpError("Creating new school data failed.", 400);
      await newSchool.save();
    } else {
      const updatedSchool = await School.findByIdAndUpdate(
        existingSchool._id,
        schoolData
      );
      if (!updatedSchool)
        throw new HttpError("Updating school data failed.", 400);
    }

    res.status(200).json({ message: "Successfully changed school data." });
  } catch (error) {
    next(error);
  }
};

export const fetchSchool = async (req, res, next) => {
  try {
    const existingSchool = await School.findOne().sort("-_id");
    res.json(existingSchool);
  } catch (error) {
    next(error);
  }
};
