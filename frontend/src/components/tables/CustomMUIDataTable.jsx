import MUIDataTable from "mui-datatables";


const transformData = (backendData) => {

    function isDate(value) {
        return !isNaN(Date.parse(value)) && new Date(value).toISOString() === value;
    }

    const columns = Object.keys(backendData[0]).map((key) => {
        if (key === "_id") {
            return { name: "_ID", options: { display: "excluded" } }
        }
        return key.replace(/([A-Z])/g, "_$1").toUpperCase();
    });

    const data = backendData.map((item) =>
        Object.values(item).map((value) => {
            if (isDate(value)) {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });
            }
            return value;
        })
    );
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
        rowsPerPageOptions: [5, 20, 50, 100],
        onRowsDelete: (rowsDeleted) => {
            const idsToDelete = rowsDeleted.data.map(d => backendData[d.dataIndex]._id);
            if (confirm("Are you sure you want to delete?")) {
                alert("Deleted successfully.");
                console.log(idsToDelete);
            }
        }
    };

    if (!backendData) return;

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