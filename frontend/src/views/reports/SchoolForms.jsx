import { Box } from '@mui/system';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import { SheetsDirective, SheetDirective, RangesDirective, RangeDirective, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import "./SchoolForms.css";

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
    let data = [
        { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, ShipCity: 'Reims' },
        { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, ShipCity: 'Münster' },
        { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, ShipCity: 'Lyon' }
    ];
    return (
        <PageContainer title="JuanDepEd | School Forms" description="this is School Forms page">
            {/* breadcrumb */}
            <Breadcrumb title="School Forms" items={BCrumb} />
            {/* end breadcrumb */}
            <Box>
                <SpreadsheetComponent>
                    <SheetsDirective>
                        <SheetDirective>
                            <RangesDirective>
                                <RangeDirective dataSource={data}></RangeDirective>
                            </RangesDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </Box>
        </PageContainer>
    );
}

export default SchoolForms;

