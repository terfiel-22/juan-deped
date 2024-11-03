import { Button, Grid, MenuItem } from '@mui/material'
import React from 'react'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect'
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField'
import { Stack } from '@mui/system'

const countries = [
    {
        value: 'india',
        label: 'India',
    },
    {
        value: 'uk',
        label: 'United Kingdom',
    },
    {
        value: 'srilanka',
        label: 'Srilanka',
    },
];

const lang = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'fr',
        label: 'French',
    },
];

const LoginForm = () => {
    //   country
    const [country, setCountry] = React.useState('');

    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
    };

    //   language
    const [language, setLanguage] = React.useState('en');

    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-fname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            First Name
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomTextField id="ft-fname" placeholder="John" fullWidth />
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel
                            htmlFor="ft-country"
                            sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}
                        >
                            Country
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomSelect
                            id="standard-select-currency"
                            value={country}
                            onChange={handleChangeCountry}
                            fullWidth
                            variant="outlined"
                        >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </CustomSelect>
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-date" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Birth Date
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomTextField type="date" id="ft-date" placeholder="John Deo" fullWidth />
                    </Grid>
                </Grid>
            </Grid>
            {/* 2 column */}
            <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-fname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Last Name
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomTextField id="ft-fname" placeholder="Deo" fullWidth />
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-lang" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Language
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomSelect
                            value={language}
                            onChange={handleChangeLanguage}
                            fullWidth
                            variant="outlined"
                        >
                            {lang.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </CustomSelect>
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-phone" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Phone no
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomTextField id="ft-phone" placeholder="123 4567 201" fullWidth />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={9}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                    <Button variant="text" color="error">
                        Cancel
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default LoginForm