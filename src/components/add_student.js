import React, { Component } from 'react';
import Input from './input';
import NavLink from './nav_link';

class AddStudent extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        course: '',
        grade: ''
    }
  }
  handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }
  handleReset = () => {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {addStudent, history} = this.props;
    const {name, grade, course} = this.state;
    addStudent({name, course, grade: Number(grade)});
    this.handleReset();
    history.push('/');
  }
  render(){
    const {name, course, grade} = this.state;
    return(
      <form className="center" onSubmit={this.handleSubmit}>
        <h1>Add Student</h1>
        <NavLink color="blue darken-2" text="View Grade Table" to="/" />
        <div className="row">
          <Input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={name}
            labelText="Student Name"
          />
        </div>
        <div className="row">
          <Input
            onChange={this.handleChange}
            type="text"
            id="course"
            name="course"
            value={course}
            labelText="Course Description"
          />
        </div>
        <div className="row">
          <Input
            onChange={this.handleChange}
            type="number"
            id="grade"
            name="grade"
            value={grade}
            labelText="Grade"
          />
        </div>
        
        <div className="right-align">
          <button className="btn waves-effect waves-light">Enter</button>
        </div>
        
      </form>
    )
  }
}

export default AddStudent;
