import MUIDataTable from 'mui-datatables';
import useMUIDataTable from './useMUIDataTable';


const CustomMUIDataTable = ({ title, backendData }) => {
    const OPTIONS = {
        search: true,
        download: true,
        downloadOptions: {
            filename: title + ".csv"
        },
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

    const { columns, data } = useMUIDataTable({ backendData });

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
