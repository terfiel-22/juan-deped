import { MobileStepper } from '@mui/material'

const ProgressMobileStepper = ({ steps, activeStep }) => {
    return (
        <MobileStepper
            variant="progress"
            steps={steps.length}
            position="bottom"
            activeStep={activeStep}
            sx={{
                width: "100%", flexGrow: 1,
                '& .MuiLinearProgress-root': {
                    width: '100%',
                    flexGrow: 1,
                },
                display: { xs: activeStep > steps.length - 1 ? "none" : "block", sm: "none" }
            }}
        />
    )
}

export default ProgressMobileStepper