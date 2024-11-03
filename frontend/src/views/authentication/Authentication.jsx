import React from 'react'
import { Grid, Box, Card } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import AuthLayout from './layouts/AuthLayout';

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
                <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={5}
                        xl={4}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', minHeight: { xs: '100vh', sm: 'auto' } }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <AuthLayout />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default Authentication