import { Box } from "@mui/system"
import PageContainer from "../../components/container/PageContainer"
import { Card, Grid2, Typography } from "@mui/material"
import Logo from "../../layouts/full/shared/logo/Logo"
import BlankCard from "../../components/shared/BlankCard"
import PersonnelLoginForm from "./forms/PersonnelLoginForm"

const PersonnelAuthentication = () => {
    return (
        <PageContainer title="JuanDepEd | Personnel Authentication" description="Juan DepEd Authentication Page">
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
                <Grid2 container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
                    <Grid2
                        size={{ xs: 12, sm: 12, lg: 12, xl: 4 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', minHeight: { xs: '100vh', sm: 'auto' } }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <BlankCard>
                                <Box padding={2}>
                                    <Typography variant="h5">Personnel Login</Typography>
                                    <PersonnelLoginForm />
                                </Box>
                            </BlankCard>
                        </Card>
                    </Grid2>
                </Grid2>
            </Box>
        </PageContainer>
    )
}

export default PersonnelAuthentication