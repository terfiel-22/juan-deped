import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

const useMUIDataTable = ({
  backendData,
  handleOpenDialog,
  setSelectedData,
  handlePrint = () => window.print(),
}) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const addButton = (
    <Tooltip title="Add New">
      <IconButton onClick={handleOpenDialog}>
        <AddIcon size="1.3rem" icon="plus" />
      </IconButton>
    </Tooltip>
  );

  const printButton = (
    <Tooltip title="Print">
      <IconButton onClick={handlePrint}>
        <LocalPrintshopIcon size="1.3rem" icon="plus" />
      </IconButton>
    </Tooltip>
  );

  const customToolBar = (
    <>
      {printButton}
      {addButton}
    </>
  );

  const isDate = useCallback(
    (value) => !isNaN(Date.parse(value)) && new Date(value).toISOString() === value,
  );

  const handleView = useCallback(
    (rowIndex) => {
      if (!backendData.length) return;
      setSelectedData(backendData[rowIndex]);
    },
    [backendData],
  );

  const customColumn = useMemo(() => ({
    name: 'ACTIONS',
    options: {
      customBodyRenderLite: (dataIndex, rowIndex) => {
        return (
          <Tooltip title="View">
            <IconButton size="small" onClick={() => handleView(rowIndex)}>
              <VisibilityIcon size="1.3rem" />
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
  }));

  useEffect(() => {
    if (!backendData.length) return;
    const _columns = Object.keys(backendData[0]).map((key) => {
      if (key === '_id') {
        return {
          name: '_ID',
          options: {
            display: 'excluded',
            download: false,
          },
        };
      }
      return key.replace(/([A-Z])/g, ' $1').toUpperCase();
    });

    setColumns([..._columns, customColumn]);
  }, [backendData]);

  useEffect(() => {
    if (!backendData.length) return;
    const _data = backendData.map((item) =>
      Object.values(item).map((value) => {
        if (isDate(value)) {
          const date = new Date(value);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        }

        if (typeof value === 'boolean' || value instanceof Boolean) return value ? 'Yes' : 'No';

        return value;
      }),
    );
    setData(_data);
  }, [backendData]);

  return { columns, data, customToolBar };
};

export default useMUIDataTable;
