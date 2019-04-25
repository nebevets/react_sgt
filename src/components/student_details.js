import React, {Component} from 'react';
import NavLink from './nav_link';
import axios from 'axios';

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
    console.log('student details loaded');
    return(
      <div>
        <h1 className="center">Student Details</h1>
        <NavLink color="blue darken-2" text="Home" to="/" />
      </div>
      
    );
  }
}

export default StudentDetails;
