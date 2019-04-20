import React, { Component } from 'react';
import axios from 'axios';
import StudentRecord from './student_record';

const dataUrl = 'data/student_grades.json';

class Table extends Component{
  constructor(props){
    super(props);
    this.state = {
      studentGrades: null
    }
  }
  componentDidMount(){
    this.getStudents();
  }
  renderTable = () => {
    const {studentGrades} = this.state;
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
      <table>
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
  getStudents = () => {
    axios
      .get(dataUrl)
      .then(response => {
        const {studentGrades} = response.data;
        this.setState({
          studentGrades
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      })
  }
  render(){
    const {error} = this.state;
    if(error){
      return(
        <div className="error">
          <h1>{error.message}</h1>
          <div>{error.stack}</div>
          <div>{error.config.url}</div>
          <div></div>
        </div>
      );
    }
    return(
      <div>
        <h2 className="center">Student Grade Table</h2>
        {this.renderTable()} 
      </div>
    );
  }
}

export default Table;
