import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

import useSort from '../../hooks/use-sort';
import Table from '../table/Table';

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
    return column;
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }
  if (sortOrder === null) {
    <div>
      <GoTriangleUp />
      <GoTriangleDown />
    </div>;
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  } else {
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
  }
}

export default SortableTable;
