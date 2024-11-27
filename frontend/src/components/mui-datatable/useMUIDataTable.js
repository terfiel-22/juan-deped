import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import { IconEye, IconPlus } from '@tabler/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';

const useMUIDataTable = ({ backendData }) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const addButton = (
    <Tooltip title="Add New">
      <IconButton onClick={() => {}}>
        <IconPlus size="1.2rem" icon="plus" />
      </IconButton>
    </Tooltip>
  );

  const isDate = useCallback(
    (value) => !isNaN(Date.parse(value)) && new Date(value).toISOString() === value,
  );

  const handleView = useCallback(
    (rowIndex) => {
      console.log(backendData[rowIndex]);
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
  }));

  useEffect(() => {
    if (!backendData) return;
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
      return key.replace(/([A-Z])/g, '_$1').toUpperCase();
    });

    setColumns([..._columns, customColumn]);
  }, [backendData]);

  useEffect(() => {
    if (!backendData) return;
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
        return value;
      }),
    );
    setData(_data);
  }, [backendData]);

  return { columns, data, addButton };
};

export default useMUIDataTable;
