import { FormControlLabel, Grid, IconButton, InputAdornment, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import { IconEye, IconEyeOff } from '@tabler/icons'
import { LoadingButton } from '@mui/lab'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'

const RegistrationForm = () => {

    const [showPassword, handleClickShowPassword, handleMouseDownPassword] = usePasswordVisibility();

    return (
        <>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                    <CustomOutlinedInput
                        id="username"
                        placeholder="Username"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomOutlinedInput
                        id="email"
                        placeholder="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="learnerReferenceNo">Learner Reference No.</CustomFormLabel>
                    <CustomOutlinedInput
                        id="learnerReferenceNo"
                        placeholder="Learner Reference No."
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="role">Type</CustomFormLabel>
                    <RadioGroup row aria-label="position" id="role" defaultValue="Student">
                        <FormControlLabel value="Student" control={<CustomRadio />} label="Student" />
                        <FormControlLabel value="Alumnus" control={<CustomRadio />} label="Alumnus" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                    <CustomOutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                                </IconButton>
                            </InputAdornment>
                        }
                        id="password"
                        placeholder="******"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <CustomFormLabel htmlFor="cpassword">Confirm Password</CustomFormLabel>
                    <CustomOutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                                </IconButton>
                            </InputAdornment>
                        }
                        id="cpassword"
                        placeholder="******"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box>
                <LoadingButton
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="button"
                >
                    Sign Up
                </LoadingButton>
            </Box>
        </>
    );
}

export default RegistrationForm