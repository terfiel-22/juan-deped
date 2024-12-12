import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid2, MenuItem } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel'
import CustomOutlinedInput from '../../../components/forms/theme-elements/CustomOutlinedInput'
import CustomSelect from '../../../components/forms/theme-elements/CustomSelect'
import useCreate from '../../../hooks/crud/useCreate'
import useUpdate from '../../../hooks/crud/useUpdate'
import useDelete from '../../../hooks/crud/useDelete'
import { setDeletedEnrollmentRequirement, setNewEnrollmentRequirement, setUpdatedEnrollmentRequirement } from '../../../store/tables/reducers/enrollment-requirement/EnrollmentRequirementAction'
import { ENROLLMENT_REQUIREMENT_FOR_ENUM, ENROLLMENT_REQUIREMENT_FOR } from '../../../constants/EnrollmentRequirementFor'
import { dateFieldFormat } from '../../../utils/dateFormatter'

const defaultData = {
    _id: null,
    name: "",
    description: "",
    requirementFor: ENROLLMENT_REQUIREMENT_FOR.GRADE_11,
    submissionDeadline: "",
};

const EnrollmentRequirementDialog = ({ isOpen, isFullScreen, handleClose, data = defaultData }) => {
    const [formData, setFormData] = useState(defaultData)
    useEffect(() => {
        if (isOpen)
            setFormData(data)
        else
            setFormData(defaultData)
    }, [data])

    const { createLoading, handleCreate } = useCreate({ url: "/enrollment/requirement", formData, setter: setNewEnrollmentRequirement })
    const { updateLoading, handleUpdate } = useUpdate({ url: "/enrollment/requirement", formData, setter: setUpdatedEnrollmentRequirement })
    const { deleteLoading, handleDelete } = useDelete({ url: "/enrollment/requirement", formData, setter: setDeletedEnrollmentRequirement })

    const isButtonLoading = formData._id ? updateLoading : createLoading;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const _handleClose = () => {
        setFormData(defaultData)
        handleClose();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formData._id ? handleUpdate() : handleCreate();
    };
    const _handleDelete = () => {
        handleDelete();
        _handleClose();
    }


    const { name, description, requirementFor, submissionDeadline } = formData;

    return (
        <Dialog
            fullScreen={isFullScreen}
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                    Enrollment Requirement
                </DialogTitle>
                <DialogContent>
                    <Stack>
                        <Grid2 container spacing={1} marginBottom={2}>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <CustomFormLabel htmlFor="name">Requirement</CustomFormLabel>
                                <CustomOutlinedInput
                                    required
                                    name="name"
                                    id="name"
                                    placeholder="Requirement"
                                    fullWidth
                                    value={name}
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <CustomFormLabel htmlFor="description">Description</CustomFormLabel>
                                <CustomOutlinedInput
                                    name="description"
                                    id="description"
                                    placeholder="Description"
                                    fullWidth
                                    value={description}
                                    onChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <CustomFormLabel htmlFor="requirementFor">Requirement For</CustomFormLabel>
                                <CustomSelect
                                    required
                                    id="requirementFor"
                                    name="requirementFor"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={requirementFor}
                                    onChange={handleChange}
                                >
                                    {
                                        ENROLLMENT_REQUIREMENT_FOR_ENUM.map((requirementFor, index) => <MenuItem key={index} value={requirementFor}>{requirementFor}</MenuItem>)
                                    }
                                </CustomSelect>
                            </Grid2>
                            <Grid2 size={{ xs: 12, sm: 12, lg: 6 }}>
                                <CustomFormLabel htmlFor="submissionDeadline">Submission Deadline</CustomFormLabel>
                                <CustomOutlinedInput
                                    required
                                    type="date"
                                    name="submissionDeadline"
                                    id="submissionDeadline"
                                    fullWidth
                                    value={dateFieldFormat(submissionDeadline)}
                                    onChange={handleChange}
                                />
                            </Grid2>
                        </Grid2>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'space-between' }}>
                    {
                        formData._id ?
                            <LoadingButton type='button' sx={{ marginLeft: '0', display: 'block' }} loading={deleteLoading} color='warning' onClick={_handleDelete}>
                                Delete
                            </LoadingButton>
                            :
                            <Box></Box>
                    }
                    <Box>
                        <Button color='error' type='button' sx={{ marginRight: '10px' }} onClick={_handleClose}>
                            Close
                        </Button>
                        <LoadingButton type='submit' loading={isButtonLoading} color='primary' >
                            Save
                        </LoadingButton>
                    </Box>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default EnrollmentRequirementDialog