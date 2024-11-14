import { Button, Grid, Alert } from '@mui/material'
import { Box, Stack } from '@mui/system'
import ProgressMobileStepper from '../../../../components/shared/ProgressMobileStepper'
import WebStepper from "../../../../components/shared/WebStepper";
import useStepper from "../../../../hooks/ui/useStepper";
import { lazy } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm';
const BasicInformation = Loadable(lazy(() => import('../student-form-steps/BasicInformation')))
const AdditionalInformation = Loadable(lazy(() => import('../student-form-steps/AdditionalInformation')))
const AddressInformation = Loadable(lazy(() => import('../student-form-steps/AddressInformation')))
const GuardianInformation = Loadable(lazy(() => import('../student-form-steps/GuardianInformation')))
const IdentificationInformation = Loadable(lazy(() => import('../student-form-steps/IdentificationInformation')))
const LearnerInformation = Loadable(lazy(() => import('../student-form-steps/LearnerInformation')))

const RegStudent = () => {
    const [formFields, handleChange, handleNextForm, handleSubmit] = useStudentDetailForm();

    // For Stepper
    const steps = [
        { component: <BasicInformation handleChange={handleChange} formFields={formFields} /> },
        { component: <LearnerInformation /> },
        { component: <IdentificationInformation /> },
        { component: <AddressInformation /> },
        { component: <GuardianInformation /> },
        { component: <AdditionalInformation /> },
    ];
    const optionals = new Set([])

    const [
        activeStep,
        isStepOptional,
        isStepSkipped,
        handleNext,
        handleBack,
        handleSkip,
        handleSteps,
        handleReset,
    ] = useStepper(steps, optionals, handleNextForm)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Box width="100%">
                    <WebStepper steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} />
                    {activeStep === steps.length ? (
                        <>
                            <Stack spacing={2} mt={3}>
                                <Alert severity="success" mt={2}>
                                    All steps completed - you&apos;re finished
                                </Alert>

                                <Box textAlign="right">
                                    <Button onClick={handleSubmit} variant="contained" color="error">
                                        Submit
                                    </Button>
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

export default RegStudent;