import React, { Component } from 'react';
import Input from './input';

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
    console.log(this.state);
    this.handleReset();
  }
  render(){
    const {name, course, grade} = this.state;
    return(
      <form className="center" onSubmit={this.handleSubmit}>
        <h1>Add Student</h1>
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
        <button className="btn waves-effect waves-light">Enter</button>
        <button className="btn waves-effect waves-light" type="button" onClick={this.handleReset}>Reset</button>
      </form>
    )
  }
}

export default AddStudent;
