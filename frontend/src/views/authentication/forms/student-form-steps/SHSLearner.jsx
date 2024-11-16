import { Box } from '@mui/system'
import { FormControlLabel, Grid, MenuItem, RadioGroup } from '@mui/material'
import CustomRadio from '../../../../components/forms/theme-elements/CustomRadio'
import CustomSelect from '../../../../components/forms/theme-elements/CustomSelect'
import CustomFormLabel from '../../../../components/forms/theme-elements/CustomFormLabel'
import useFetchAndDispatch from '../../../../hooks/shared/useFetchAndDispatch'
import useStudentDetailForm from '../../../../hooks/student/useStudentDetailForm'
import { selectStrands, selectTracks, setStrands, setTracks } from '../../../../store/career/CareerSlice'

const SHSLearner = () => {
    const fieldName = "seniorHighSchool";
    const { formFields, handleNestedChange } = useStudentDetailForm()
    const { semester, track, strand } = formFields[fieldName];

    const handleChange = (e) => handleNestedChange(e, fieldName);

    /** Fetch Tracks */
    const { data: tracks } = useFetchAndDispatch({
        url: "/tracks", setter: setTracks, selector: selectTracks
    });

    /** Fetch Strands */
    const { data: strands } = useFetchAndDispatch({
        url: `/strands/track/${track}`, setter: setStrands, selector: selectStrands
    });

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel htmlFor="semester">Semester</CustomFormLabel>
                    <RadioGroup row aria-label="semester" name="semester" id="semester" onChange={handleChange} value={semester} >
                        <FormControlLabel value="1st Sem" control={<CustomRadio />} label="1st Sem" />
                        <FormControlLabel value="2nd Sem" control={<CustomRadio />} label="2nd Sem" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
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
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
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
                </Grid>
            </Grid>
        </Box>
    )
}

export default SHSLearner