import { Button, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

const RegSelection = ({ setRegType }) => {
    const handleSelection = (e) => {
        const selected = e.target.name;
        setRegType(selected);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
                <Box width="100%">
                    <Box py={2}>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="button"
                            name="student"
                            onClick={handleSelection}
                        >
                            Student
                        </Button>
                    </Box>
                    <Divider>
                        <Typography
                            component="span"
                            color="textSecondary"
                            variant="h6"
                            fontWeight="400"
                            position="relative"
                            px={2}
                        >
                            or
                        </Typography>
                    </Divider>
                    <Box py={2}>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            type="button"
                            name="alumni"
                            onClick={handleSelection}
                        >
                            Alumni
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default RegSelection