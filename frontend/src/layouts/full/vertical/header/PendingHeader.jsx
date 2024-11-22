import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// components 
import Profile from './Profile';

const PendingHeader = () => {
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    // drawer
    const customizer = useSelector((state) => state.customizer);

    const AppBarStyled = styled(AppBar)(({ theme }) => ({
        boxShadow: 'none',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        [theme.breakpoints.up('lg')]: {
            minHeight: customizer.TopbarHeight,
        },
    }));

    const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        width: '100%',
        color: theme.palette.text.secondary,
    }));

    return (
        <AppBarStyled position={lgUp ? "absolute" : "relative"} color="default" >
            <ToolbarStyled>
                <Box flexGrow={1} />
                <Stack spacing={1} direction="row" alignItems="center">
                    <Profile />
                </Stack>
            </ToolbarStyled>
        </AppBarStyled>
    );
};

PendingHeader.propTypes = {
    sx: PropTypes.object,
    toggleSidebar: PropTypes.func,
};

export default PendingHeader;
