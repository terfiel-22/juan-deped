import { Alert, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import { Box, Stack } from '@mui/system'
import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox'
import { Link } from 'react-router-dom'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import { IconEye, IconEyeOff } from '@tabler/icons'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import useSignin from '../../../hooks/auth/useSignin'
import { LoadingButton } from '@mui/lab'


const LoginForm = () => {
    const { formData, error, resetError, loading, handleChange, handleSubmit } = useSignin()
    const { email, password, remembered } = formData;

    const [showPassword, handleClickShowPassword, handleMouseDownPassword] = usePasswordVisibility()

    return (
        <>
            <Stack>
                {error &&
                    <Alert variant="filled" severity="error" onClose={resetError}>
                        {error}
                    </Alert>
                }
                <Box>
                    <CustomFormLabel htmlFor="email">Email/LRN</CustomFormLabel>
                    <CustomOutlinedInput
                        id="email"
                        name="email"
                        placeholder="Email or LRN"
                        value={email}
                        onChange={handleChange}
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
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
                <Grid container justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<CustomCheckbox name="remembered" checked={remembered} onChange={handleChange} />}
                            label="Remeber this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/forgot-password"
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
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    type="button"
                    onClick={handleSubmit}
                >
                    Sign In
                </LoadingButton>
            </Box>
        </>
    )
}

export default LoginForm