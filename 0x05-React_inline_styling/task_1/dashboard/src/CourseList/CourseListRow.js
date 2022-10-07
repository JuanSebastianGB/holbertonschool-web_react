import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};
const rowHeaderStyle = {
  backgroundColor: '#deb5b545',
};

const textCenter = {
  textAlign: 'center',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  if (!isHeader) {
    return (
      <tr style={rowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  if (textSecondCell)
    return (
      <tr style={rowHeaderStyle}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );

  return (
    <tr style={{ ...rowHeaderStyle, ...textCenter }}>
      <th colSpan="2">{textFirstCell}</th>
    </tr>
  );
};

CourseListRow.propTypes = {
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CourseListRow;
