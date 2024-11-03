import { Button, Grid, IconButton, InputAdornment } from '@mui/material'
import React from 'react'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField'
import { Stack } from '@mui/system'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import { IconEye, IconEyeOff } from '@tabler/icons'

const RegistrationForm = () => {

    //   password 
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //   confirm password 
    const [showPassword2, setShowPassword2] = React.useState(false);

    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-uname" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Username
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomTextField id="ft-uname" placeholder="John.Deo" fullWidth />
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-pwd" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Password
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomOutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            id="fs-pwd"
                            placeholder="john.deo"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* 2 column */}
            <Grid item xs={12} lg={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-email" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Email
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomOutlinedInput
                            endAdornment={<InputAdornment position="end">@example.com</InputAdornment>}
                            id="fs-email"
                            placeholder="john.deo"
                            fullWidth
                        />
                    </Grid>
                    {/* 4 */}
                    <Grid item xs={12} sm={3} display="flex" alignItems="center">
                        <CustomFormLabel htmlFor="ft-lang" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                            Confirm
                        </CustomFormLabel>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <CustomOutlinedInput
                            type={showPassword2 ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="end"
                                    >
                                        {showPassword2 ? <IconEyeOff size="20" /> : <IconEye size="20" />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            id="fs-pwd"
                            placeholder="john.deo"
                            fullWidth
                        />
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

export default RegistrationForm