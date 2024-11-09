import { IconButton, InputAdornment, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import { alpha, Box } from '@mui/system';
import { IconFilter, IconSearch, IconTrash } from '@tabler/icons';
import React from 'react'
import PropTypes from 'prop-types';

const EnhancedTableToolbar = (props) => {
    const { numSelected, handleSearch, search, searchField = '' } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle2" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
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
                </Box>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <IconTrash width="18" />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <IconFilter size="1.2rem" icon="filter" />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

export default EnhancedTableToolbar