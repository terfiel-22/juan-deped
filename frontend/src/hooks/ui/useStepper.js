import { useCallback, useState } from 'react';

const useStepper = (steps, optionals, handleNextForm) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = useCallback((step) => optionals.has(step), [optionals]);
  const isStepSkipped = useCallback((step) => skipped.has(step), [skipped]);

  const handleNext = useCallback(() => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    handleNextForm();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleSkip = useCallback(() => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }, [activeStep]);

  // eslint-disable-next-line consistent-return
  const handleSteps = useCallback((step) => {
    return steps[step].component;
  }, []);

  const handleReset = useCallback(() => {
    setActiveStep(0);
  }, []);

  return [
    activeStep,
    isStepOptional,
    isStepSkipped,
    handleNext,
    handleBack,
    handleSkip,
    handleSteps,
    handleReset,
  ];
};

export default useStepper;
