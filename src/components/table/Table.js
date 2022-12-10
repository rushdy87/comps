import React from 'react';

const Table = ({ data }) => {
  const renderedRows = data.map((hero) => {
    return (
      <tr className="border-b" key={hero.name}>
        <td className="p-3">{hero.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${hero.color}`} />
        </td>
        <td className="p-3">{hero.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Name</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
