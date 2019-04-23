import React, { Component } from 'react';
import StudentRecord from './student_record';

class Table extends Component{
  renderTable = () => {
    const {studentGrades} = this.props;
    if(!studentGrades){
      return(
        <kbd className="center">Loading student data...</kbd>
      );
    }
    if(!studentGrades.length){
      return(
        <h4 className="center">No student data found.</h4>
      );
    }
    const tableRows = studentGrades.map((student) => <StudentRecord key={student.id} {...student} />);
    return(
      <table className="striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table> 
    );
  }
  render(){
    return(
      <div>
        <h2 className="center">Student Grade Table</h2>
        {this.renderTable()} 
      </div>
    );
  }
}

export default Table;
