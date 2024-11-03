import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Box, Stack, Typography, Card } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import AuthLogin from './authForms/AuthLogin';

const Authentication = () => {
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
                <Grid container spacing={0} justifyContent="end" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={5}
                        xl={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        p={2}
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <AuthLogin
                                subtitle={
                                    <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                                        <Typography color="textSecondary" variant="h6" fontWeight="500">
                                            New to JuanDepEd?
                                        </Typography>
                                        <Typography
                                            component={Link}
                                            to="/auth/register"
                                            fontWeight="500"
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'primary.main',
                                            }}
                                        >
                                            Create an account
                                        </Typography>
                                    </Stack>
                                }
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default Authentication