import MUIDataTable from "mui-datatables";

const transformData = (backendData) => {
    const columns = Object.keys(backendData[0]);
    const data = backendData.map((item) => Object.values(item));
    return { columns, data };
}

const CustomMUIDataTable = ({ title, backendData }) => {
    const OPTIONS = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        rowHover: false,
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 20, 50],
        tableBodyHeight: "100%",
        tableBodyMaxHeight: "100%",
        onRowsDelete: (rowsDeleted, newTableData) => {
            console.log(rowsDeleted)
            console.log(newTableData)
        }
    };

    const { columns, data } = transformData(backendData)

    return (
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={OPTIONS}
            className="print-container"
        />
    );
}

export default CustomMUIDataTable