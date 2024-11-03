import { Button, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import React from 'react'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField'
import { Box, Stack } from '@mui/system'
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox'
import { Link } from 'react-router-dom'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import { IconEye, IconEyeOff } from '@tabler/icons'


const LoginForm = () => {

    // Password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Stack>
                <Box>
                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                    <CustomOutlinedInput
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                        id="email"
                        placeholder="john.deo"
                        fullWidth
                    />
                </Box>
                <Box>
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
                </Box>
                <Grid container justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<CustomCheckbox defaultChecked />}
                            label="Remeber this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/auth/forgot-password"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password ?
                    </Typography>
                </Grid>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    component={Link}
                    to="/"
                    type="submit"
                >
                    Sign In
                </Button>
            </Box>
        </>
    )
}

export default LoginForm