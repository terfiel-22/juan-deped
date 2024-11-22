import { Box } from '@mui/system';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import "./SchoolForms.css";
import { useEffect, useRef } from 'react';

const BCrumb = [
    {
        to: '/',
        title: 'Reports',
    },
    {
        title: 'School Forms',
    },
];
const SchoolForms = () => {

    const spreadsheetRef = useRef(null);
    const rows = [];
    useEffect(() => {
        if (spreadsheetRef.current) {
            spreadsheetRef.current.sheets[0].name = "SHSF-1";
            spreadsheetRef.current.sheets[1].name = "SHSF-2";
            spreadsheetRef.current.sheets[2].name = "SHSF-4";
            spreadsheetRef.current.sheets[3].name = "SHSF-5A";
            spreadsheetRef.current.sheets[4].name = "SHSF-5B";
            spreadsheetRef.current.sheets[5].name = "SHSF-6";
            spreadsheetRef.current.sheets[6].name = "SHSF-7";
            spreadsheetRef.current.sheets[7].name = "SHSF-8";
            spreadsheetRef.current.refresh();
        }
    }, []);

    return (
        <PageContainer title="JuanDepEd | School Forms" description="this is School Forms page">
            {/* breadcrumb */}
            <Breadcrumb title="School Forms" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <SpreadsheetComponent
                    ref={spreadsheetRef}
                    sheets={[
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                        {
                            ranges: [
                                {
                                    dataSource: rows,
                                },
                            ],
                        },
                    ]}
                />
            </Box>
        </PageContainer>
    );
}

export default SchoolForms;

