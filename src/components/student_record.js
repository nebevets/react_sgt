import React from 'react';
import PropTypes from 'prop-types';

const StudentRecord = ({name, id, course, grade, seeDetails}) => {
  return(
    <tr onClick={seeDetails}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{course}</td>
        <td>{grade}</td>
      </tr>
  );
}

StudentRecord.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  grade: PropTypes.number
}

StudentRecord.defaultProps = {
  grade: 0
}

export default StudentRecord;
