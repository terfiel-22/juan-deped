import { Button, Grid, Step, Stepper, StepLabel, Typography, Alert } from '@mui/material'
import { useState } from 'react'
import { Box, Stack } from '@mui/system'
import PersonalInformation from './registration/PersonalInformation'
import StudentInformation from './registration/StudentInformation'
import IdentificationInformation from './registration/IdentificationInformation'
import AddressInformation from './registration/AddressInformation'
import GuardianInformation from './registration/GuardianInformation'
import AdditionalInformation from './registration/AdditionalInformation'
import ProgressMobileStepper from '../../../components/shared/ProgressMobileStepper'

const steps = ['Personal', 'Student', 'Identification', 'Address', 'Guardian', 'Additional'];
const optionals = new Set([]) // index of optional steps

const RegistrationForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => optionals.has(step)

    const isStepSkipped = (step) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
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
    };

    // eslint-disable-next-line consistent-return
    const handleSteps = (step) => {
        switch (step) {
            case 0:
                return (
                    <PersonalInformation />
                );
            case 1:
                return (
                    <StudentInformation />
                );
            case 2:
                return (
                    <IdentificationInformation />
                );
            case 3:
                return (
                    <AddressInformation />
                );
            case 4:
                return (
                    <GuardianInformation />
                );
            case 5:
                return (
                    <AdditionalInformation />
                );
            default:
                break;
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Box width="100%">
                    <Stepper activeStep={activeStep} alternativeLabel sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Stack spacing={2} mt={3}>
                                <Alert severity="success" mt={2}>
                                    All steps completed - you&apos;re finished
                                </Alert>

                                <Box textAlign="right">
                                    <Button onClick={handleReset} variant="contained" color="error">
                                        Reset
                                    </Button>
                                </Box>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Box>{handleSteps(activeStep)}</Box>

                            <Box display="flex" flexDirection="row" mt={3}>
                                <Button
                                    color="inherit"
                                    variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box flex="1 1 auto" />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        Skip
                                    </Button>
                                )}

                                <Button
                                    onClick={handleNext}
                                    variant="contained"
                                    color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}

                    <ProgressMobileStepper steps={steps} activeStep={activeStep} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm