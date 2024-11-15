import { Button, Grid, Alert } from '@mui/material'
import { Box, Stack } from '@mui/system'
import ProgressMobileStepper from '../../../../components/shared/ProgressMobileStepper'
import WebStepper from "../../../../components/shared/WebStepper";
import useStepper from "../../../../hooks/ui/useStepper";
import { lazy } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm';
const BasicInformation = Loadable(lazy(() => import('../student-form-steps/BasicInformation')))
const LearnerInformation = Loadable(lazy(() => import('../student-form-steps/LearnerInformation')))
const CurrentAddressInformation = Loadable(lazy(() => import('../student-form-steps/CurrentAddressInformation')))
const PermanentAddressInformation = Loadable(lazy(() => import('../student-form-steps/PermanentAddressInformation')))
const ParentInformation = Loadable(lazy(() => import('../student-form-steps/ParentInformation')))
const ReturneeInformation = Loadable(lazy(() => import('../student-form-steps/ReturneeInformation')))
const SHSLearner = Loadable(lazy(() => import('../student-form-steps/SHSLearner')))
const PreferredDistanceLearningModalities = Loadable(lazy(() => import('../student-form-steps/PreferredDistanceLearningModalities')))
const NCPasser = Loadable(lazy(() => import('../student-form-steps/NCPasser')))
const HSCompleter = Loadable(lazy(() => import('../student-form-steps/HSCompleter')))

const RegStudent = () => {
    const { handleSubmit } = useStudentDetailForm();

    // For Stepper
    const steps = [
        { name: "Basic Information", component: <BasicInformation /> },
        { name: "Learner Information", component: <LearnerInformation /> },
        { name: "Current Address", component: <CurrentAddressInformation /> },
        { name: "Permanent Address", component: <PermanentAddressInformation /> },
        { name: "Parent Information", component: <ParentInformation /> },
        { name: "Returnee Information", component: <ReturneeInformation /> },
        { name: "SHS Learner Information", component: <SHSLearner /> },
        { name: "Preferred Distance Learning Modality/ies", component: <PreferredDistanceLearningModalities /> },
        { name: "For NC Passer", component: <NCPasser /> },
        { name: "For HS Completer", component: <HSCompleter /> },
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
    ] = useStepper(steps, optionals)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Box width="100%" px={2}>
                    <WebStepper steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} />
                    {activeStep === steps.length ? (
                        <>
                            <Stack spacing={2} mt={3}>
                                <Alert severity="success" mt={2}>
                                    All steps completed - you&apos;re finished
                                </Alert>

                                <Box textAlign="right">
                                    <Button onClick={handleSubmit} variant="contained" color="primary">
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