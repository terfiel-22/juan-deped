import { Step, StepLabel, Stepper, Typography } from "@mui/material";


const WebStepper = ({ steps, activeStep, isStepOptional, isStepSkipped }) => {
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
                    <Step key={index} {...stepProps}>
                        {name ?
                            <StepLabel {...labelProps}>{name}</StepLabel>
                            :
                            <StepLabel {...labelProps} />
                        }
                    </Step>
                );
            })}
        </Stepper>
    )
}

export default WebStepper