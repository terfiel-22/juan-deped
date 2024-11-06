import React from 'react'
import { Grid, Box, Card, InputAdornment, IconButton, Typography, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import { Stack } from '@mui/system';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../../components/forms/theme-elements/CustomOutlinedInput';
import { IconEye, IconEyeOff } from '@tabler/icons';
import { Link } from 'react-router-dom';

const AdminAuth = () => {
    // Password
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <PageContainer title="JuanDepEd | Authentication" description="Juan DepEd Authentication Page">
            <Box
                sx={{
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
                        backgroundSize: '400% 400%',
                        animation: 'gradient 15s ease infinite',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        opacity: '0.3',
                    },
                }}
            >
                <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        xl={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', minHeight: { xs: '100vh', sm: 'auto' } }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <Stack sx={{ py: 4, }}>
                                <Box display="flex" alignItems="center" justifyContent="center">
                                    <Typography variant="h1">Administration</Typography>
                                </Box>
                                <Box>
                                    <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                                    <CustomOutlinedInput
                                        id="username"
                                        placeholder="ACNTS SHS"
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
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default AdminAuth