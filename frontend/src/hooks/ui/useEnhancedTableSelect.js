import { useCallback, useState } from 'react';

const useEnhancedTableSelect = (rows, fieldName) => {
  /** Selected */
  const [selected, setSelected] = useState([]);
  const isSelected = useCallback((name) => selected.indexOf(name) !== -1, [selected]);

  // This is for select all the row
  const handleSelectAllClick = useCallback(
    (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n[fieldName]);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    },
    [fieldName],
  );

  // This is for the single row sleect
  const handleClick = useCallback(
    (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      setSelected(newSelected);
    },
    [selected],
  );

  return [selected, isSelected, handleSelectAllClick, handleClick];
};

export default useEnhancedTableSelect;
