import { Grid2 } from '@mui/material'
import { Box } from '@mui/system'
import { useCallback, useState } from 'react'
import { ENHANCED_BEEF_STATE } from './enhanceBeefState'
import { LoadingButton } from '@mui/lab'
import CustomHeader4 from '../../../components/material-ui/typography/CustomHeader4'
import GeneralInformationForm from './forms/GeneralInformationForm'
import LearnerInformation from './forms/LearnerInformationForm'

const EnhancedBeefForm = () => {
    const [formData, setFormData] = useState(ENHANCED_BEEF_STATE);
    const [loading, setLoading] = useState(false);
    const handleChange = useCallback(
        (e) => {
            const { name, value, type, checked } = e.target;
            const _value =
                type === 'checkbox'
                    ? checked
                    : value === 'true' || value === 'false'
                        ? value === 'true'
                        : value;
            setFormData({
                ...formData,
                [name]: _value,
            });
        },
        [formData],
    );
    const handleNestedChange = useCallback(
        (e, field) => {
            const { name, value, type, checked } = e.target;
            const _value =
                type === 'checkbox' ? checked : value === 'true' ? true : value === 'false' ? false : value;

            const updatedField = { ...formData[field], [name]: _value };
            const updatedFormData = { ...formData, [field]: updatedField };

            setFormData(updatedFormData)
        },
        [formData],
    );
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(formData);
    })

    return (
        <Box component='form' onSubmit={handleSubmit} width="100%" px={2}>
            <Grid2 container rowSpacing={5}>
                <Grid2 size={12}>
                    <CustomHeader4 text="General Information" />
                    <GeneralInformationForm formData={formData} handleChange={handleChange} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Learner Information" />
                    <LearnerInformation formData={formData} handleChange={handleChange} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Address Information" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Parent/Guardian Information" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For Returning Learner" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For Learners in SHS" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Preferred Distance Learning Modality/ies" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For NC Passer" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For SHS Eligibility" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Additional Information" />
                    {/* Content Here */}
                </Grid2>
                <Grid2 container size={12} justifyContent="flex-end">
                    <LoadingButton variant='contained' loading={loading} type='submit'>Save Changes</LoadingButton>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default EnhancedBeefForm