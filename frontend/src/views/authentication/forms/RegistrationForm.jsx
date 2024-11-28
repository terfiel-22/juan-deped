import { FormControlLabel, Grid2, IconButton, InputAdornment, RadioGroup } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { IconEye, IconEyeOff } from '@tabler/icons'
import { LoadingButton } from '@mui/lab'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import CustomRadio from '../../../components/forms/theme-elements/CustomRadio'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import useSignup from '../../../hooks/auth/useSignup'

const RegistrationForm = () => {
    const { showPassword, handleClickShowPassword, handleMouseDownPassword } = usePasswordVisibility();

    const { formData, loading, handleChange, handleSubmit } = useSignup();

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <Grid2 container spacing={1} marginBottom={2}>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                        <CustomOutlinedInput
                            required
                            name="username"
                            id="username"
                            value={formData.username}
                            placeholder="Username"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                        <CustomOutlinedInput
                            required
                            name="email"
                            id="email"
                            value={formData.email}
                            placeholder="Email"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="lrn">Learner Reference No.</CustomFormLabel>
                        <CustomOutlinedInput
                            name="lrn"
                            id="lrn"
                            value={formData.lrn}
                            placeholder="LRN (if available)"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="role">Registration Type</CustomFormLabel>
                        <RadioGroup row aria-label="position" id="role" name="role" value={formData.role} onChange={handleChange} >
                            <FormControlLabel value="Student" control={<CustomRadio />} label="Student" />
                            <FormControlLabel value="Alumni" control={<CustomRadio />} label="Alumni" />
                        </RadioGroup>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                        <CustomOutlinedInput
                            required
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
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="cpassword">Confirm Password</CustomFormLabel>
                        <CustomOutlinedInput
                            required
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
                            value={formData.cpassword}
                            onChange={handleChange}
                        />
                    </Grid2>
                </Grid2>
            </Stack>
            <Box>
                <LoadingButton
                    type="submit"
                    loading={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                >
                    Sign Up
                </LoadingButton>
            </Box>
        </form>
    );
}

export default RegistrationForm