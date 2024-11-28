import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const CustomHeader4 = ({ text }) => {
    const theme = useTheme();
    const customizer = useSelector((state) => state.customizer);
    return (
        <Typography variant='h4' sx={{ background: theme.palette.primary.light, color: theme.palette.primary.main, borderRadius: `${customizer.borderRadius}px`, padding: 1 }}>{text}</Typography>
    )
}

export default CustomHeader4