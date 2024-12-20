import get from "lodash/get.js";
import { LearnerEnhancedBeef } from "../../models/learner/learner-enhanced-beef.model.js";
import HttpError from "../../utils/HttpError.utils.js";

export const saveEnhancedBeef = async (req, res, next) => {
  try {
    const learnerId = get(req, "user._id");
    const email = get(req, "user.email");
    const lrn = get(req, "user.lrn");

    const enhancedBeefData = {
      ...req.body,
      learnerId,
      email,
      lrn,
    };

    const existingEnhancedBeef = await LearnerEnhancedBeef.findOne({
      learnerId,
    });
    if (!existingEnhancedBeef) {
      /** Create New */
      const newEnhancedBeef = new LearnerEnhancedBeef(enhancedBeefData);
      if (!newEnhancedBeef)
        throw new HttpError("Creating enhanced BEEF data failed.", 400);
      await newEnhancedBeef.save();
    } else {
      /** Update */
      const updatedEnhancedBeef = await LearnerEnhancedBeef.findByIdAndUpdate(
        existingEnhancedBeef._id,
        enhancedBeefData
      );
      if (!updatedEnhancedBeef)
        throw new HttpError("Updating enhanced BEEF data failed.", 400);
    }

    res.status(200).json({ message: "Successfully saved enhanced BEEF." });
  } catch (error) {
    next(error);
  }
};

export const fetchOwnEnhancedBeef = async (req, res, next) => {
  try {
    const learnerId = get(req, "user._id");
    const learnerEnhancedBeef = await LearnerEnhancedBeef.findOne({
      learnerId,
    });
    res.json(learnerEnhancedBeef);
  } catch (error) {
    next(error);
  }
};

export const fetchEnhancedBeefs = async (req, res, next) => {
  try {
    const learnerEnhancedBeefs = await LearnerEnhancedBeef.find().select([
      "email",
      "mobile",
      "lrn",
      "lastName",
      "firstName",
      "middleName",
      "birthDate",
      "sex",
      "age",
      "status",
    ]);
    res.json(learnerEnhancedBeefs);
  } catch (error) {
    next(error);
  }
};

export const fetchEnhancedBeefById = async (req, res, next) => {
  try {
    const { learnerId } = req.params;
    const learnerEnhancedBeef = await LearnerEnhancedBeef.findById(
      learnerId
    ).populate(["seniorHighSchool.track", "seniorHighSchool.strand"]);
    res.json(learnerEnhancedBeef);
  } catch (error) {
    next(error);
  }
};

export const updateEnhancedBeefStatus = async (req, res, next) => {
  try {
    const { learnerId } = req.params;
    const { status } = req.body;
    const learnerEnhancedBeef = await LearnerEnhancedBeef.findById(learnerId);
    if (!learnerEnhancedBeef)
      throw new HttpError("Learner Enhanced BEEF not found", 404);

    const updatedEnhancedBeef = await LearnerEnhancedBeef.findByIdAndUpdate(
      learnerId,
      { status },
      {
        new: true,
        fields: {
          email: 1,
          mobile: 1,
          lrn: 1,
          lastName: 1,
          firstName: 1,
          middleName: 1,
          birthDate: 1,
          sex: 1,
          age: 1,
          status: 1,
        },
      }
    );

    if (!updatedEnhancedBeef)
      throw new HttpError("Updating Learner Enhanced BEEF failed.", 400);

    res.json({
      message: "Successfully updated enhanced BEEF.",
      result: updatedEnhancedBeef,
    });
  } catch (error) {
    next(error);
  }
};
