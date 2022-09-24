import React from 'react';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (!isHeader) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  if (textSecondCell)
    return (
      <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );

  return (
    <tr>
      <th colSpan="2">{textFirstCell}</th>
    </tr>
  );
};

export default CourseListRow;
