import { Box } from '@mui/system'
import { FormControlLabel, Grid2, MenuItem, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../../components/forms/theme-elements/CustomRadio'
import CustomSelect from '../../../../../components/forms/theme-elements/CustomSelect'
import CustomFormLabel from '../../../../../components/forms/theme-elements/CustomFormLabel'
import useStudentDetailForm from '../../../../../hooks/student/useStudentDetailForm'
import useFetch from '../../../../../hooks/crud/useFetch'

const SHSLearner = () => {
    const fieldName = "seniorHighSchool";
    const { formFields, handleNestedChange } = useStudentDetailForm()
    const { semester, track, strand } = formFields[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    /** Fetch Tracks */
    const { dataArray: tracks } = useFetch({ url: "/tracks" });

    /** Fetch Strands */
    const { dataArray: strands } = useFetch({ url: track ? `/strands/track/${track}` : null });

    return (
        <Box>
            <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="semester">Semester</CustomFormLabel>
                    <RadioGroup row aria-label="semester" name="semester" id="semester" onChange={handleChange} value={semester} >
                        <FormControlLabel value="1st Sem" control={<CustomRadio />} label="1st Sem" />
                        <FormControlLabel value="2nd Sem" control={<CustomRadio />} label="2nd Sem" />
                    </RadioGroup>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="track">Track</CustomFormLabel>
                    <CustomSelect
                        id="track"
                        name="track"
                        onChange={handleChange}
                        value={track}
                        variant="outlined"
                        fullWidth
                        size="small"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            tracks.map(({ _id, name }) => <MenuItem key={_id} value={_id}>{name}</MenuItem>)
                        }
                    </CustomSelect>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, lg: 4 }}>
                    <CustomFormLabel htmlFor="strand">Strand</CustomFormLabel>
                    <CustomSelect
                        id="strand"
                        name="strand"
                        onChange={handleChange}
                        value={strand}
                        disabled={!track}
                        variant="outlined"
                        fullWidth
                        size="small"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            strands.map(({ _id, name }) => <MenuItem key={_id} value={_id}>{name}</MenuItem>)
                        }
                    </CustomSelect>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default SHSLearner