import CodeDialog from "../../../shared/CodeDialog";
import React from "react";
const GroupedCode = () => {
    return (
        <>
            <CodeDialog>
                {`
import * as React from 'react';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import { IconMoodSmile } from '@tabler/icons';

import User2 from "../../assets/images/profile/user-2.jpg"
import User3 from "../../assets/images/profile/user-3.jpg"
import User4 from "../../assets/images/profile/user-4.jpg"

<Stack direction="row" spacing={1} justifyContent="center">
    <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={User4} />
        <Avatar alt="Travis Howard" src={User2} />
        <Avatar alt="Cindy Baker" src={User3} />
    </AvatarGroup>
</Stack>`}
            </CodeDialog>
        </>
    );
};

export default GroupedCode;