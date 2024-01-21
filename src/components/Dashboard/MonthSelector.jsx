import React from "react";

const MonthSelector = ({ onMonthClick }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderMonths = () => {
    let rows = [];
    const numCols = 4;

    for (let i = 0; i < monthNames.length; i += numCols) {
      let cols = [];
      for (let j = 0; j < numCols; j++) {
        const index = i + j;
        if (index < monthNames.length) {
          cols.push(
            <td key={index} onClick={() => onMonthClick(monthNames[index])}>
              {monthNames[index]}
            </td>
          );
        }
      }
      rows.push(<tr key={i / numCols}>{cols}</tr>);
    }

    return rows;
  };

  return (
    <table className="month-selector">
      <tbody>{renderMonths()}</tbody>
    </table>
  );
};

export default MonthSelector;
