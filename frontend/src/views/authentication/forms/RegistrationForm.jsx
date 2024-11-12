import { Alert, FormControlLabel, Grid, IconButton, InputAdornment, RadioGroup } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { IconEye, IconEyeOff } from '@tabler/icons'
import { LoadingButton } from '@mui/lab'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import useSignup from '../../../hooks/auth/useSignup'

const RegistrationForm = () => {
    const [showPassword, handleClickShowPassword, handleMouseDownPassword] = usePasswordVisibility();

    const [error, resetError, loading, handleChange, handleSubmit] = useSignup();

    return (
        <>
            <Stack>
                {error &&
                    <Alert variant="filled" severity="error" onClose={resetError}>
                        {error}
                    </Alert>
                }
                <Grid container spacing={1} marginBottom={2}>
                    <Grid item xs={12} sm={12} lg={6}>
                        <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                        <CustomOutlinedInput
                            name="username"
                            id="username"
                            placeholder="Username"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                        <CustomOutlinedInput
                            name="email"
                            id="email"
                            placeholder="Email"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <CustomFormLabel htmlFor="learnerReferenceNo">Learner Reference No.</CustomFormLabel>
                        <CustomOutlinedInput
                            name="learnerReferenceNo"
                            id="learnerReferenceNo"
                            placeholder="Learner Reference No."
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <CustomFormLabel htmlFor="role">Registration Type</CustomFormLabel>
                        <RadioGroup row aria-label="position" id="role" name="role" defaultValue="Student" onChange={handleChange} >
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
                            name="password"
                            id="password"
                            placeholder="******"
                            fullWidth
                            onChange={handleChange}
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
                            name="cpassword"
                            id="cpassword"
                            placeholder="******"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Stack>
            <Box>
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="button"
                    onClick={handleSubmit}
                >
                    Sign Up
                </LoadingButton>
            </Box>
        </>
    );
}

export default RegistrationForm