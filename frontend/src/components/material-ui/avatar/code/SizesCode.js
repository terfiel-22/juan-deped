import CodeDialog from "../../../shared/CodeDialog";
import React from "react";
const SizesCode = () => {
    return (
        <>
            <CodeDialog>
                {`
import * as React from 'react';
import { Avatar, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons';

import User1 from "../../assets/images/profile/user-1.jpg"
import User2 from "../../assets/images/profile/user-2.jpg"
import User3 from "../../assets/images/profile/user-3.jpg"
import User4 from "../../assets/images/profile/user-4.jpg"
import User5 from "../../assets/images/profile/user-5.jpg"
import User6 from "../../assets/images/profile/user-6.jpg"

<Stack direction="row" spacing={1} justifyContent="center">
    <Avatar alt="Remy Sharp" src={User1} sx={{ width: 24, height: 24 }} />
    <Avatar alt="Remy Sharp" src={User2} sx={{ width: 32, height: 32 }} />
    <Avatar alt="Remy Sharp" src={User3} />
    <Avatar alt="Remy Sharp" src={User4} sx={{ width: 50, height: 50 }} />
    <Avatar alt="Remy Sharp" src={User5} sx={{ width: 60, height: 60 }} />
    <Avatar alt="Remy Sharp" src={User6} sx={{ width: 65, height: 65 }} />
</Stack>`}
            </CodeDialog>
        </>
    );
};

export default SizesCode;