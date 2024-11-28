import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, InputAdornment, MenuItem } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import { IconEye, IconEyeOff } from '@tabler/icons'
import { LoadingButton } from '@mui/lab'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import usePasswordVisibility from '../../../hooks/ui/usePasswordVisibility'
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect'
import { USER_ROLES_ARRAY } from '../../../constants/UserRolesArray'
import useCreate from '../../../hooks/crud/useCreate'
import useUpdate from '../../../hooks/crud/useUpdate'
import useDelete from '../../../hooks/crud/useDelete'

import { setDeletedAccount, setNewAccount, setUpdatedAccount } from '../../../store/tables/reducers/account/AccountAction'

const defaultData = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: ""
};

const AccountDialog = ({ isOpen, isFullScreen, handleClose: close, data = data ?? defaultData }) => {
    const { showPassword, handleClickShowPassword, handleMouseDownPassword } = usePasswordVisibility();
    const [formData, setFormData] = useState(data)
    useEffect(() => {
        setFormData(data)
    }, [data])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };
    const handleClose = () => {
        setFormData(defaultData);
        close();
    }

    const { createLoading, handleCreate } = useCreate({ url: "/auth/add", formData, setter: setNewAccount })
    const { updateLoading, handleUpdate } = useUpdate({ url: "/auth/edit", formData, setter: setUpdatedAccount })
    const { deleteLoading, handleDelete } = useDelete({ url: "/auth/delete", formData, setter: setDeletedAccount })

    const { username, email, password, cpassword, role } = formData;

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
                    <Grid2 container spacing={1} marginBottom={2}>
                        <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
                            <CustomOutlinedInput
                                name="username"
                                id="username"
                                placeholder="Username"
                                fullWidth
                                value={username}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                            <CustomOutlinedInput
                                name="email"
                                id="email"
                                placeholder="Email"
                                fullWidth
                                value={email}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
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
                                value={password ?? ""}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
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
                                value={cpassword ?? ""}
                                onChange={handleChange}
                            />
                        </Grid2>
                        <Grid2 size={12}>
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
                        </Grid2>
                    </Grid2>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'space-between' }}>
                {
                    formData._id ?
                        <LoadingButton sx={{ marginLeft: '0', display: 'block' }} loading={deleteLoading} color='warning' onClick={handleDelete}>
                            Delete
                        </LoadingButton>
                        :
                        <Box></Box>
                }
                <Box>
                    <Button color='error' sx={{ marginRight: '10px' }} onClick={handleClose}>
                        Close
                    </Button>
                    <LoadingButton loading={formData._id ? updateLoading : createLoading} color='primary' onClick={formData._id ? handleUpdate : handleCreate}>
                        Save
                    </LoadingButton>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default AccountDialog