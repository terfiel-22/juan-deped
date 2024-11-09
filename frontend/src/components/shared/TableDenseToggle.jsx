import { FormControlLabel } from '@mui/material'
import { Box } from '@mui/system'
import CustomSwitch from '../forms/theme-elements/CustomSwitch'

const TableDenseToggle = ({ dense, handleChangeDense }) => {
    return (
        <Box ml={2}>
            <FormControlLabel
                control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    )
}

export default TableDenseToggle