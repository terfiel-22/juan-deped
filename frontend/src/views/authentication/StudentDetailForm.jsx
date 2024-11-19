import { Grid, Box, Card } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import BlankCard from '../../components/shared/BlankCard';
import RegStudent from './forms/registration-type/RegStudent';
import useFetchAndDispatch from '../../hooks/shared/useFetchAndDispatch';
import { selectCurrentStudent, setCurrentStudent } from '../../store/student/StudentSlice';

const StudentDetailForm = ({ studentAuthId }) => {
    useFetchAndDispatch({
        url: `/student/form/${studentAuthId}`,
        setter: setCurrentStudent,
        selector: selectCurrentStudent
    });

    return (
        <PageContainer title="JuanDepEd | Student Form" description="Juan DepEd Authentication Page">
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
                        lg={10}
                        xl={8}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', minHeight: { xs: '100vh', sm: 'auto' } }}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <Logo />
                            </Box>
                            <BlankCard>
                                <Box px={2} py={4}>
                                    <RegStudent />
                                </Box>
                            </BlankCard>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default StudentDetailForm