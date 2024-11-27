import { IconButton, Tooltip } from '@mui/material';
import { IconEye } from '@tabler/icons';
import MUIDataTable from 'mui-datatables';

const transformData = (backendData) => {
    function isDate(value) {
        return !isNaN(Date.parse(value)) && new Date(value).toISOString() === value;
    }

    const handleView = (rowIndex) => {
        console.log(backendData[rowIndex])
    }

    const customColumn = {
        name: 'ACTIONS',
        options: {
            customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                    <Tooltip title="View">
                        <IconButton size="small" onClick={() => handleView(rowIndex)}>
                            <IconEye size="1.1rem" />
                        </IconButton>
                    </Tooltip>
                );
            },
            print: false,
            download: false,
            filter: false,
            searchable: false,
            sort: false,
        },
    };

    const columns = Object.keys(backendData[0]).map((key) => {
        if (key === '_id') {
            return { name: '_ID', options: { display: 'excluded' } };
        }
        return key.replace(/([A-Z])/g, '_$1').toUpperCase();
    });
    columns.push(customColumn);

    const data = backendData.map((item) =>
        Object.values(item).map((value) => {
            if (isDate(value)) {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
            }
            return value;
        }),
    );
    return { columns, data };
};

const CustomMUIDataTable = ({ title, backendData }) => {
    const OPTIONS = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        selectableRows: "none",
        filterType: 'dropdown',
        responsive: 'standard',
        rowHover: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 20, 50, 100],
    };

    if (!backendData) return;

    const { columns, data } = transformData(backendData);

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={OPTIONS}
            className="print-container"
        />
    );
};

export default CustomMUIDataTable;
