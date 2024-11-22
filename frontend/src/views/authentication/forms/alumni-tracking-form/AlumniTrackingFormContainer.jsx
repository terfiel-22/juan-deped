import { Button, Grid } from '@mui/material'
import { Box, Stack } from '@mui/system'
import PrintIcon from '@mui/icons-material/Print';
import { LoadingButton } from '@mui/lab';
import ProgressMobileStepper from '../../../../components/shared/ProgressMobileStepper'
import WebStepper from "../../../../components/shared/WebStepper";
import useStepper from "../../../../hooks/ui/useStepper";
import { lazy, useRef } from "react";
import Loadable from "../../../../layouts/full/shared/loadable/Loadable";
import useComponentPrinter from '../../../../hooks/ui/useComponentPrinter';
import { useSelector } from 'react-redux';
import { selectIsFromSubmitted } from '../../../../store/student/StudentSlice';

const AlumniTrackingFormContainer = () => {

    const loading = true;
    const handleSubmit = () => { }

    const contentRef = useRef();
    const { handlePrint: reactToPrintFn } = useComponentPrinter({ contentRef, fileName: "Student Form" })

    const isFormSubmitted = useSelector(selectIsFromSubmitted)

    // For Stepper
    const steps = [
        { name: "sample", component: <h1>Sample</h1> }
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
                                    <Box display="flex" gap={2}>
                                        {
                                            isFormSubmitted &&
                                            <Button
                                                color="success"
                                                variant="contained"
                                                onClick={reactToPrintFn}
                                                title='Print'
                                            >
                                                <PrintIcon />
                                            </Button>
                                        }
                                        <LoadingButton
                                            loading={loading}
                                            variant="contained"
                                            color="primary"
                                            size="medium"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </LoadingButton>
                                    </Box>
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

export default AlumniTrackingFormContainer;