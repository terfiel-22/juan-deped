import PageContainer from '../../../components/container/PageContainer'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb'
import DashboardCard from '../../../components/shared/DashboardCard';
import { Grid2, Typography } from '@mui/material';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput';
import { useCallback, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';

const BCrumb = [
    {
        to: '/',
        title: 'School Management',
    },
    {
        title: 'School',
    },
];

const INITIAL_DATA = {
    schoolId: "",
    schoolName: "",
    district: "",
    division: "",
    region: "",
    semester: "",
    beginningOfSemDate: "",
    endOfSemDate: "",
    schoolYear: "",
    schoolHead: "",
    schoolHeadDesignation: "",
    assistantPrincipal: "",
    assistantPrincipalDesignation: "",
}

const School = () => {
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    });

    const handleSubmit = useCallback(() => {
        console.log(formData);
    }, [formData])

    const { schoolId, schoolName, district, division, region, semester, beginningOfSemDate, endOfSemDate, schoolYear, schoolHead, schoolHeadDesignation, assistantPrincipal, assistantPrincipalDesignation } = formData;

    return (
        <PageContainer title="JuanDepEd | School" description="this is School page">
            {/* breadcrumb */}
            <Breadcrumb title="School" items={BCrumb} />
            {/* end breadcrumb */}

            <DashboardCard>
                <Typography variant='h4' align='center'>School Settings for Current School Year</Typography>
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="schoolId">School ID</CustomFormLabel>
                        <CustomOutlinedInput
                            name="schoolId"
                            id="schoolId"
                            placeholder="Enter School ID"
                            fullWidth
                            value={schoolId}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="schoolName">School Name</CustomFormLabel>
                        <CustomOutlinedInput
                            name="schoolName"
                            id="schoolName"
                            placeholder="Enter School Name"
                            fullWidth
                            value={schoolName}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="district">District</CustomFormLabel>
                        <CustomOutlinedInput
                            name="district"
                            id="district"
                            placeholder="Enter District"
                            fullWidth
                            value={district}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="division">Division</CustomFormLabel>
                        <CustomOutlinedInput
                            name="division"
                            id="division"
                            placeholder="Enter Division"
                            fullWidth
                            value={division}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                        <CustomFormLabel htmlFor="region">Region</CustomFormLabel>
                        <CustomOutlinedInput
                            name="region"
                            id="region"
                            placeholder="Enter Region"
                            fullWidth
                            value={region}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="schoolYear">School Year</CustomFormLabel>
                        <CustomOutlinedInput
                            name="schoolYear"
                            id="schoolYear"
                            placeholder="Enter School Year"
                            fullWidth
                            value={schoolYear}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="semester">Semester</CustomFormLabel>
                        <CustomOutlinedInput
                            name="semester"
                            id="semester"
                            placeholder="Enter Semester"
                            fullWidth
                            value={semester}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="beginningOfSemDate">Beginning of Semester</CustomFormLabel>
                        <CustomOutlinedInput
                            type="date"
                            name="beginningOfSemDate"
                            id="beginningOfSemDate"
                            placeholder="Enter Start Date"
                            fullWidth
                            value={beginningOfSemDate}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                        <CustomFormLabel htmlFor="endOfSemDate">End Of Semester</CustomFormLabel>
                        <CustomOutlinedInput
                            type="date"
                            name="endOfSemDate"
                            id="endOfSemDate"
                            placeholder="Enter End Date"
                            fullWidth
                            value={endOfSemDate}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="schoolHead">School Head</CustomFormLabel>
                        <CustomOutlinedInput
                            name="schoolHead"
                            id="schoolHead"
                            placeholder="Enter Name"
                            fullWidth
                            value={schoolHead}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="schoolHeadDesignation">Designation</CustomFormLabel>
                        <CustomOutlinedInput
                            name="schoolHeadDesignation"
                            id="schoolHeadDesignation"
                            placeholder="Enter Designation"
                            fullWidth
                            value={schoolHeadDesignation}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="assistantPrincipal">Assistant Principal</CustomFormLabel>
                        <CustomOutlinedInput
                            name="assistantPrincipal"
                            id="assistantPrincipal"
                            placeholder="Enter Name"
                            fullWidth
                            value={assistantPrincipal}
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                        <CustomFormLabel htmlFor="assistantPrincipalDesignation">Designation</CustomFormLabel>
                        <CustomOutlinedInput
                            name="assistantPrincipalDesignation"
                            id="assistantPrincipalDesignation"
                            placeholder="Enter Designation"
                            fullWidth
                            value={assistantPrincipalDesignation}
                            onChange={handleChange}
                        />
                    </Grid2>
                </Grid2>
                <Grid2 container justifyContent="end" marginTop={4}>
                    <LoadingButton loading={isLoading} variant='contained' color='primary' onClick={handleSubmit}>
                        Save Changes
                    </LoadingButton>
                </Grid2>
            </DashboardCard>
        </PageContainer>
    )
}

export default School