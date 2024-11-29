import {
  AppliedSubject,
  CoreSubject,
  SpecializedSubject,
} from "../../models/school-management/subject.model.js";

export const fetchCoreSubjects = async (req, res, next) => {
  try {
    const coreSubjects = await CoreSubject.find().select([
      "name",
      "writtenWork",
      "performanceTask",
      "quarterlyAssessment",
    ]);

    res.status(200).json(coreSubjects);
  } catch (error) {
    next(error);
  }
};

export const fetchAppliedSubjects = async (req, res, next) => {
  try {
    const appliedSubjects = await AppliedSubject.find().select([
      "name",
      "writtenWork",
      "performanceTask",
      "quarterlyAssessment",
    ]);

    res.status(200).json(appliedSubjects);
  } catch (error) {
    next(error);
  }
};

export const fetchSpecializedSubjects = async (req, res, next) => {
  try {
    const specializedSubjects = await SpecializedSubject.find().select([
      "name",
      "strand",
      "writtenWork",
      "performanceTask",
      "quarterlyAssessment",
    ]);

    res.status(200).json(specializedSubjects);
  } catch (error) {
    next(error);
  }
};
