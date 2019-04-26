import React, {Component} from 'react';
import NavLink from './nav_link';
import axios from 'axios';
import './student_details.css';

class StudentDetails extends Component{
  state = {
    details: {}
  }
  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await axios.get('/data/student_details.json');
    const studentDetails = response.data[id] || false;
    this.setState({
      details: studentDetails
    });
  }
  render(){
    const {student, classData, studentGrade} = this.state.details;
    return (
      <div>
        <h2 className="center">Student Details</h2>
        <NavLink color="blue darken-2" text="Home" to="/" />
        <div className="container details">
          {
            student &&
              <dl className="row student">
                <dt>Student:</dt>
                <dd>{student.fullName}</dd>
                <dt>Email:</dt>
                <dd className="email">{student.email}</dd>
                <dt>Phone:</dt>
                <dd>{student.phone}</dd>
              </dl>
          }
          {
            classData && 
              <dl className="row classData">
                <dt>Course:</dt>
                <dd>{classData.course}</dd>
                <dt>Description:</dt>
                <dd>{classData.description}</dd>
                <dt>Instructor:</dt>
                <dd>{classData.instructor}</dd>
              </dl>
          }
          {
            studentGrade &&
              <div className="row center studentGrade">
                Final Grade: {studentGrade}
              </div>
          }
        </div>
      </div>
    );
  }
}

export default StudentDetails;
