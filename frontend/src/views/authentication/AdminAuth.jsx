import { Grid, Box, Card, InputAdornment, IconButton, Typography, Alert } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import { Stack } from '@mui/system';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../../components/forms/theme-elements/CustomOutlinedInput';
import { IconEye, IconEyeOff } from '@tabler/icons';
import { LoadingButton } from '@mui/lab';
import usePasswordVisibility from '../../hooks/ui/usePasswordVisibility';
import useSignin from '../../hooks/auth/useSignin';

const AdminAuth = () => {
    const [showPassword, handleClickShowPassword, handleMouseDownPassword] = usePasswordVisibility()

    const [error, resetError, loading, handleChange, handleSubmit] = useSignin()

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
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h1">Administration</Typography>
                            </Box>
                            <Stack sx={{ py: 4 }}>
                                {error &&
                                    <Alert variant="filled" severity="error" onClose={resetError}>
                                        {error}
                                    </Alert>
                                }
                                <Box>
                                    <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                                    <CustomOutlinedInput
                                        onChange={handleChange}
                                        id="email"
                                        placeholder="admin@example.com"
                                        type="email"
                                        fullWidth
                                    />
                                </Box>
                                <Box>
                                    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                                    <CustomOutlinedInput
                                        onChange={handleChange}
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
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default AdminAuth