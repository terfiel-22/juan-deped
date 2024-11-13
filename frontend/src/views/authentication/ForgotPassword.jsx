import React from 'react'
import { Grid, Box, Card, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import { Stack } from '@mui/system';
import CustomFormLabel from '../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../components/forms/theme-elements/CustomTextField';
import { Link } from 'react-router-dom';
import BlankCard from '../../components/shared/BlankCard';

const ForgotPassword = () => {
    return (
        <PageContainer title="JuanDepEd | ForgotPassword" description="Juan DepEd ForgotPassword Page">
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
                            <BlankCard>
                                <Stack p={2} spacing={2}>
                                    <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
                                    <CustomTextField id="reset-email" variant="outlined" fullWidth />

                                    {/* TODO: SEND EMAIL PASSWORD RESET LINK */}
                                    <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/dashboard">
                                        Forgot Password
                                    </Button>
                                    <Button color="primary" size="large" fullWidth component={Link} to="/auth">
                                        Back to Login
                                    </Button>
                                </Stack>
                            </BlankCard>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default ForgotPassword