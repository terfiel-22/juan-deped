import { Button, Grid, Alert } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useReactToPrint } from "react-to-print";
import ProgressMobileStepper from '../../../../components/shared/ProgressMobileStepper'
import WebStepper from "../../../../components/shared/WebStepper";
import useStepper from "../../../../hooks/ui/useStepper";
import { lazy, useRef } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm';
import { LoadingButton } from '@mui/lab';
import StudentPreEnrollmentData from '../student-form-steps/StudentPreEnrollmentData';
const GeneralInformation = Loadable(lazy(() => import('../student-form-steps/GeneralInformation')))
const LearnerInformation = Loadable(lazy(() => import('../student-form-steps/LearnerInformation')))
const CurrentAddressInformation = Loadable(lazy(() => import('../student-form-steps/CurrentAddressInformation')))
const PermanentAddressInformation = Loadable(lazy(() => import('../student-form-steps/PermanentAddressInformation')))
const ParentInformation = Loadable(lazy(() => import('../student-form-steps/ParentInformation')))
const ReturneeInformation = Loadable(lazy(() => import('../student-form-steps/ReturneeInformation')))
const SHSLearner = Loadable(lazy(() => import('../student-form-steps/SHSLearner')))
const PreferredDistanceLearningModalities = Loadable(lazy(() => import('../student-form-steps/PreferredDistanceLearningModalities')))
const NCPasser = Loadable(lazy(() => import('../student-form-steps/NCPasser')))
const SHSEligibility = Loadable(lazy(() => import('../student-form-steps/SHSEligibility')))
const HealthReport = Loadable(lazy(() => import('../student-form-steps/HealthReport')))

const RegStudent = () => {
    const { handleSubmit, error, resetError, loading } = useStudentDetailForm();

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef })

    // For Stepper
    const steps = [
        { name: "General Information", component: <GeneralInformation /> },
        { name: "Learner Information", component: <LearnerInformation /> },
        { name: "Current Address", component: <CurrentAddressInformation /> },
        { name: "Permanent Address", component: <PermanentAddressInformation /> },
        { name: "Parent Information", component: <ParentInformation /> },
        { name: "For Returning Learner", component: <ReturneeInformation /> },
        { name: "For Learners in SHS", component: <SHSLearner /> },
        { name: "Preferred Distance Learning Modality/ies", component: <PreferredDistanceLearningModalities /> },
        { name: "For NC Passer", component: <NCPasser /> },
        { name: "For SHS Eligibility", component: <SHSEligibility /> },
        { name: "For Learner's Health", component: <HealthReport /> },
    ];
    const optionals = new Set([])

    const { activeStep,
        isStepOptional,
        isStepSkipped,
        handleNext,
        handleBack,
        handleGoTo,
        handleSkip,
        handleSteps } = useStepper({ steps, optionals })

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Box width="100%" px={2}>
                    <WebStepper steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} handleGoTo={handleGoTo} />
                    {activeStep === steps.length ? (
                        <>
                            <Stack spacing={2} mt={3}>
                                {error ?
                                    <Alert variant="filled" severity="error" onClose={resetError} mt={2} >
                                        {error}
                                    </Alert>
                                    :
                                    <StudentPreEnrollmentData ref={contentRef} />
                                }

                                <Box display="flex" justifyContent="space-between" mt={3}>
                                    <Button
                                        color="inherit"
                                        variant="contained"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        color="inherit"
                                        variant="contained"
                                        disabled={activeStep === 0}
                                        onClick={reactToPrintFn}
                                        sx={{ mr: 1 }}
                                    >
                                        Print
                                    </Button>
                                    <LoadingButton
                                        loading={loading}
                                        variant="contained"
                                        color="primary"
                                        size="medium"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Save Student Form
                                    </LoadingButton>
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
        </Grid >
    )
}

export default RegStudent;