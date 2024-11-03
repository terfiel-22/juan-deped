import CodeDialog from "../../../shared/CodeDialog";
import React from "react";
const Subtitle1Code = () => {
    return (
        <>
            <CodeDialog>
                {`

import { Typography } from '@mui/material';

<Typography variant="subtitle1">
    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
    tenetur
</Typography>`}
            </CodeDialog>
        </>
    );
};

export default Subtitle1Code;