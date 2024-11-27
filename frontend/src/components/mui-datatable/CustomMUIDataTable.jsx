import MUIDataTable from 'mui-datatables';
import useMUIDataTable from './useMUIDataTable';
import "./CustomMUIDataTable.css";

const CustomMUIDataTable = ({ title, backendData }) => {

    const { columns, data, customToolBar } = useMUIDataTable({ backendData });

    const options = {
        search: true,
        download: true,
        downloadOptions: {
            filename: title + '.csv',
        },
        customToolbar: () => customToolBar,
        print: false,
        viewColumns: true,
        filter: true,
        selectableRows: 'none',
        filterType: 'dropdown',
        responsive: 'standard',
        rowHover: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 20, 50, 100],
    };


    return (
        <MUIDataTable
            {...{ title, options, columns, data }}
            className="print-container"
        />
    );
};

export default CustomMUIDataTable;
