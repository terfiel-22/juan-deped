import { Box } from '@mui/system';
import { FormControlLabel, Grid2, RadioGroup } from '@mui/material';
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '../../../../components/forms/theme-elements/CustomTextField';
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio';

const SHSEligibilityForm = ({ formData, handleNestedChange }) => {
    const fieldName = 'shsEligibility';
    const {
        isHsCompleter,
        hsGenAve,
        isJhsCompleter,
        jhsGenAve,
        graduationDate,
        schoolName,
        schoolAddress,
        isPeptPasser,
        peptRating,
        isAlsPasser,
        alsRating,
        isOtherExamPasser,
        otherExam,
        examDate,
        learningCenterName,
        learningCenterAddress,
    } = formData[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="isHsCompleter">
                        Is HS (Old Curriculum) Completer?
                    </CustomFormLabel>
                    <RadioGroup
                        row
                        aria-label="isHsCompleter"
                        name="isHsCompleter"
                        onChange={handleChange}
                        value={isHsCompleter}
                    >
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="hsGenAve">General Average</CustomFormLabel>
                    <CustomTextField
                        id="hsGenAve"
                        name="hsGenAve"
                        onChange={handleChange}
                        value={hsGenAve}
                        disabled={!isHsCompleter}
                        placeholder="Enter gen ave."
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="isJhsCompleter">
                        Is JHS Completer?
                    </CustomFormLabel>
                    <RadioGroup
                        row
                        aria-label="isJhsCompleter"
                        name="isJhsCompleter"
                        onChange={handleChange}
                        value={isJhsCompleter}
                    >
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 3 }}>
                    <CustomFormLabel htmlFor="jhsGenAve">General Average</CustomFormLabel>
                    <CustomTextField
                        id="jhsGenAve"
                        name="jhsGenAve"
                        onChange={handleChange}
                        value={jhsGenAve}
                        disabled={!isJhsCompleter}
                        placeholder="Enter gen ave."
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="graduationDate">Graduation Date</CustomFormLabel>
                    <CustomTextField
                        id="graduationDate"
                        name="graduationDate"
                        type="date"
                        onChange={handleChange}
                        value={graduationDate}
                        disabled={!(isHsCompleter || isJhsCompleter)}
                        placeholder="Enter graduation date"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="schoolName">School Name</CustomFormLabel>
                    <CustomTextField
                        id="schoolName"
                        name="schoolName"
                        onChange={handleChange}
                        value={schoolName}
                        disabled={!(isHsCompleter || isJhsCompleter)}
                        placeholder="Enter school name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="schoolAddress">School Address</CustomFormLabel>
                    <CustomTextField
                        id="schoolAddress"
                        name="schoolAddress"
                        onChange={handleChange}
                        value={schoolAddress}
                        disabled={!(isHsCompleter || isJhsCompleter)}
                        placeholder="Enter school address"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="isPeptPasser">
                        Is PEPT Passer?
                    </CustomFormLabel>
                    <RadioGroup
                        row
                        aria-label="isPeptPasser"
                        name="isPeptPasser"
                        onChange={handleChange}
                        value={isPeptPasser}
                    >
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="peptRating">Rating</CustomFormLabel>
                    <CustomTextField
                        id="peptRating"
                        name="peptRating"
                        onChange={handleChange}
                        value={peptRating}
                        disabled={!isPeptPasser}
                        placeholder="Enter PEPT rating"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="isAlsPasser">
                        Is ALS Passer?
                    </CustomFormLabel>
                    <RadioGroup
                        row
                        aria-label="isAlsPasser"
                        name="isAlsPasser"
                        onChange={handleChange}
                        value={isAlsPasser}
                    >
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="alsRating">Rating</CustomFormLabel>
                    <CustomTextField
                        id="alsRating"
                        name="alsRating"
                        onChange={handleChange}
                        value={alsRating}
                        disabled={!isAlsPasser}
                        placeholder="Enter ALS rating"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="isOtherExamPasser">
                        Other?
                    </CustomFormLabel>
                    <RadioGroup
                        row
                        aria-label="isOtherExamPasser"
                        name="isOtherExamPasser"
                        onChange={handleChange}
                        value={isOtherExamPasser}
                    >
                        <FormControlLabel value={true} control={<CustomRadio />} label="Yes" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="No" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 2 }}>
                    <CustomFormLabel htmlFor="otherExam">Specify</CustomFormLabel>
                    <CustomTextField
                        id="otherExam"
                        name="otherExam"
                        onChange={handleChange}
                        value={otherExam}
                        disabled={!isOtherExamPasser}
                        placeholder="Enter other exam"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="examDate">Exam Date</CustomFormLabel>
                    <CustomTextField
                        id="examDate"
                        name="examDate"
                        type="date"
                        onChange={handleChange}
                        value={examDate}
                        disabled={!(isPeptPasser || isAlsPasser || isOtherExamPasser)}
                        placeholder="Enter exam date"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="learningCenterName">Learning Center Name</CustomFormLabel>
                    <CustomTextField
                        id="learningCenterName"
                        name="learningCenterName"
                        onChange={handleChange}
                        value={learningCenterName}
                        disabled={!(isPeptPasser || isAlsPasser || isOtherExamPasser)}
                        placeholder="Enter name"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="learningCenterAddress">Learning Center Address</CustomFormLabel>
                    <CustomTextField
                        id="learningCenterAddress"
                        name="learningCenterAddress"
                        onChange={handleChange}
                        value={learningCenterAddress}
                        disabled={!(isPeptPasser || isAlsPasser || isOtherExamPasser)}
                        placeholder="Enter address"
                        variant="outlined"
                        fullWidth
                        size="small"
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default SHSEligibilityForm;
