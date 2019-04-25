import React, { Component } from 'react';
import StudentRecord from './student_record';
import NavLink from './nav_link';

class Table extends Component{
  goToDetails(id){
    this.props.history.push(`student-details/${id}`);
  }
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
    const tableRows = studentGrades.map((student) => <StudentRecord key={student.id} {...student} seeDetails={() => this.goToDetails(student.id)} />);
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
        <NavLink color="blue darken-2" text="Add Student" to="/add" />
        {this.renderTable()} 
      </div>
    );
  }
}

export default Table;
