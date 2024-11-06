export const studentLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Student Login route" });
  } catch (error) {
    next(error);
  }
};

export const alumniLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Alumni Login route." });
  } catch (error) {
    next(error);
  }
};

export const parentLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Parent Login route." });
  } catch (error) {
    next(error);
  }
};

export const personnelLogin = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Personnel Login route." });
  } catch (error) {
    next(error);
  }
};

export const studentRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Student Register route" });
  } catch (error) {
    next(error);
  }
};

export const alumniRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Alumni Register route." });
  } catch (error) {
    next(error);
  }
};

export const parentRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Parent Register route." });
  } catch (error) {
    next(error);
  }
};

export const personnelRegister = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Personnel Register route." });
  } catch (error) {
    next(error);
  }
};
