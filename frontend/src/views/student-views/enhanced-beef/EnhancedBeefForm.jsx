import { Grid2 } from '@mui/material'
import { Box } from '@mui/system'
import { LoadingButton } from '@mui/lab'
import CustomHeader4 from '../../../components/material-ui/typography/CustomHeader4'
import GeneralInformationForm from './forms/GeneralInformationForm'
import LearnerInformationForm from './forms/LearnerInformationForm'
import AddressInformationForm from './forms/AddressInformationForm'
import ParentGuardianInformationForm from './forms/ParentGuardianInformationForm'
import ReturneeInformationForm from './forms/ReturneeInformationForm'
import SHSLearnerForm from './forms/SHSLearnerForm'
import PreferredDistanceLearningModalitiesForm from './forms/PreferredDistanceLearningModalitiesForm'
import NCPasserForm from './forms/NCPasserForm'
import SHSEligibilityForm from './forms/SHSEligibilityForm'
import AdditionalInformationForm from './forms/AdditionalInformationForm'
import useEnhancedBeefForm from './hooks/useEnhancedBeefForm'

const EnhancedBeefForm = () => {
    const { formData, handleChange, handleNestedChange, handleSubmit, loading } = useEnhancedBeefForm();

    return (
        <Box component='form' onSubmit={handleSubmit} width="100%" px={2}>
            <Grid2 container rowSpacing={5}>
                <Grid2 size={12}>
                    <CustomHeader4 text="General Information" />
                    <GeneralInformationForm {...{ formData, handleChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Learner Information" />
                    <LearnerInformationForm {...{ formData, handleChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Address Information" />
                    <AddressInformationForm {...{ formData, handleChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Parent/Guardian Information" />
                    <ParentGuardianInformationForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For Returning Learner" />
                    <ReturneeInformationForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For Learners in SHS" />
                    <SHSLearnerForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Preferred Distance Learning Modalities" />
                    <PreferredDistanceLearningModalitiesForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For NC Passer" />
                    <NCPasserForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="For SHS Eligibility" />
                    <SHSEligibilityForm {...{ formData, handleNestedChange }} />
                </Grid2>
                <Grid2 size={12}>
                    <CustomHeader4 text="Additional Information" />
                    <AdditionalInformationForm  {...{ formData, handleChange }} />
                </Grid2>
                <Grid2 container size={12} justifyContent="flex-end">
                    <LoadingButton variant='contained' loading={loading} type='submit'>Save Changes</LoadingButton>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default EnhancedBeefForm