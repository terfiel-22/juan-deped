import CodeDialog from "../../../shared/CodeDialog";
import React from "react";
const DisabledCode = () => {
    return (
        <>
            <CodeDialog>
                {`
import * as React from 'react';
import { 
Avatar, 
Chip, 
Grid }  from '@mui/material';
import { 
IconCheck, 
IconChecks, 
IconMoodHappy } from '@tabler/icons';
import InlineItemCard from "@/app/components/shared/InlineItemCard";

<InlineItemCard>
    <Chip
        label="Custom Icon" disabled avatar={<Avatar >M</Avatar>}
        onDelete={handleDelete}
    />
    <Chip
        label="Custom Icon" color="primary" disabled avatar={<Avatar >S</Avatar>}
        onDelete={handleDelete}
    />
</InlineItemCard>`}
            </CodeDialog>
        </>
    );
};

export default DisabledCode;