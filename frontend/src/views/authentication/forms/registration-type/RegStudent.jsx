import { useState } from "react";
import { Button, Grid, Alert } from '@mui/material'
import { Box, Stack } from '@mui/system'
import PersonalInformation from '../registration-step-forms/PersonalInformation'
import StudentInformation from '../registration-step-forms/StudentInformation'
import IdentificationInformation from '../registration-step-forms/IdentificationInformation'
import AddressInformation from '../registration-step-forms/AddressInformation'
import GuardianInformation from '../registration-step-forms/GuardianInformation'
import AdditionalInformation from '../registration-step-forms/AdditionalInformation'
import ProgressMobileStepper from '../../../../components/shared/ProgressMobileStepper'
import WebStepper from "../../../../components/shared/WebStepper";
import useStepper from "../../../../hooks/ui/useStepper";

const steps = [
    { name: "Personal", component: <PersonalInformation /> },
    { name: "Student", component: <StudentInformation /> },
    { name: "Identification", component: <IdentificationInformation /> },
    { name: "Address", component: <AddressInformation /> },
    { name: "Guardian", component: <GuardianInformation /> },
    { name: "Additional", component: <AdditionalInformation /> },
]
const optionals = new Set([]) // index of optional steps

const RegStudent = () => {
    // For Stepper
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
                <Box width="100%">
                    <WebStepper steps={steps} activeStep={activeStep} isStepOptional={isStepOptional} isStepSkipped={isStepSkipped} />
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

export default RegStudent;