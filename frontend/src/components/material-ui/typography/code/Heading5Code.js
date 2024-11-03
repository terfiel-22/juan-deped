import CodeDialog from "../../../shared/CodeDialog";
import React from "react";
const Heading5Code = () => {
    return (
        <>
            <CodeDialog>
                {`

import { Typography } from '@mui/material';

<Typography variant="h5">h5. Heading</Typography>`}
            </CodeDialog>
        </>
    );
};

export default Heading5Code;