import { IconButton, InputAdornment, TextField, Toolbar, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { IconFilter, IconPlus, IconSearch } from '@tabler/icons';

const EnhancedTableToolbar = (props) => {
    const { handleSearch, search, searchField = '', handleOpenDialog = () => { } } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 }
            }}
        >
            <Box sx={{ flex: '1 1 100%' }}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconSearch size="1.1rem" />
                            </InputAdornment>
                        ),
                    }}
                    placeholder={`Search ${searchField}`}
                    size="small"
                    onChange={handleSearch}
                    value={search}
                />
                <Tooltip title="Filter">
                    <IconButton>
                        <IconFilter size="1.2rem" icon="filter" />
                    </IconButton>
                </Tooltip>
            </Box>

            <Tooltip title="Add New">
                <IconButton onClick={handleOpenDialog}>
                    <IconPlus size="1.2rem" icon="plus" />
                </IconButton>
            </Tooltip>
        </Toolbar>
    );
};

export default EnhancedTableToolbar