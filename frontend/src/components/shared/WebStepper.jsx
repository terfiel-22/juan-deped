import { Step, StepLabel, Stepper, Typography } from "@mui/material";


const WebStepper = ({ steps, activeStep, isStepOptional, isStepSkipped, handleGoTo }) => {
    const handleClick = (index) => {
        handleGoTo(index);
    }
    return (
        <Stepper activeStep={activeStep} alternativeLabel sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {steps.map(({ name }, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={index} {...stepProps} onClick={() => handleClick(index)} sx={{ cursor: "pointer" }}>
                        <StepLabel {...labelProps}>{activeStep === index && name ? name : ""}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    )
}

export default WebStepper