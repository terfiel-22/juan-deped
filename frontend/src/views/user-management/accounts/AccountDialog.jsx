import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, InputAdornment, MenuItem } from '@mui/material'
import { Stack } from '@mui/system'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import { useState } from 'react'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import { IconEye, IconEyeOff } from '@tabler/icons'
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect'
import { USER_ROLES_ARRAY } from '../../../constants/UserRolesArray'

const initialForm = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: ""
};

const AccountDialog = ({ isOpen, isFullScreen, handleClose, userData = initialForm }) => {
    const [formFields, setFormFields] = useState(userData)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        })
    };
    const { username, email, password, cpassword, role } = formFields;

    const [showPassword, handleClickShowPassword, handleMouseDownPassword] = usePasswordVisibility();

    return (
        <Dialog
            fullScreen={isFullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                User Account
            </DialogTitle>
            <DialogContent>
                <Stack>
                    <Grid container spacing={1} marginBottom={2}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                            <CustomOutlinedInput
                                name="username"
                                id="username"
                                placeholder="Username"
                                fullWidth
                                value={username}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                            <CustomOutlinedInput
                                name="email"
                                id="email"
                                placeholder="Email"
                                fullWidth
                                value={email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
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
                                name="password"
                                id="password"
                                placeholder="******"
                                fullWidth
                                value={password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <CustomFormLabel htmlFor="cpassword">Confirm Password</CustomFormLabel>
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
                                name="cpassword"
                                id="cpassword"
                                placeholder="******"
                                fullWidth
                                value={cpassword}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12}>
                            <CustomFormLabel htmlFor="role">Role</CustomFormLabel>
                            <CustomSelect
                                id="role"
                                name="role"
                                variant="outlined"
                                fullWidth
                                size="small"
                                value={role}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    USER_ROLES_ARRAY.map((role, index) => <MenuItem key={index} value={role}>{role}</MenuItem>)
                                }
                            </CustomSelect>
                        </Grid>
                    </Grid>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button color='error' onClick={handleClose}>
                    Close
                </Button>
                <Button color='primary' onClick={handleClose} autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AccountDialog