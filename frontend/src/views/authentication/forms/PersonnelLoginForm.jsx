import { FormControlLabel, FormGroup, Grid2, IconButton, InputAdornment } from '@mui/material'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import { Box, Stack } from '@mui/system'
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import { IconEye, IconEyeOff } from '@tabler/icons'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import useSignin from '../../../hooks/auth/useSignin'
import { LoadingButton } from '@mui/lab'


const PersonnelLoginForm = () => {
    const { formData, loading, handleChange, handleSubmit } = useSignin({ url: "/auth/personnel/login" })
    const { email, password, remembered } = formData;

    const { showPassword, handleClickShowPassword, handleMouseDownPassword } = usePasswordVisibility()

    return (
        <form onSubmit={handleSubmit}>
            <Stack>
                <Box>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomOutlinedInput
                        required
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Box>
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
                        id="password"
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Grid2 container justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<CustomCheckbox name="remembered" checked={remembered} onChange={handleChange} />}
                            label="Remember this Device"
                        />
                    </FormGroup>
                </Grid2>
            </Stack>
            <Box>
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="submit"
                >
                    Sign In
                </LoadingButton>
            </Box>
        </form>
    )
}

export default PersonnelLoginForm