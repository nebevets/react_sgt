import React, { Component } from 'react';
import axios from 'axios';

const dataUrl = 'data/student_grades.json';

class Table extends Component{
  constructor(props){
    super(props);
    this.state = {
      studentGrades: []
    }
  }
  componentDidMount(){
    console.log('table cpdm');
    this.getStudents();
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
    const {studentGrades, error} = this.state;
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
    const tableRows = studentGrades.map((student) =>
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.course}</td>
        <td>{student.grade}</td>
      </tr>
    );
    return(
      <div>
        <h2 className="center">Student Grade Table</h2>
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
      </div>
    );
  }
}

export default Table;
