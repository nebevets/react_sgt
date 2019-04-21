import React, { Component } from 'react';

// Build a form for new students with the following inputs:
//   - name
//   - course
//   - grade
// When submitted console.logs the new student info

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
        <label htmlFor="name"></label>
        <input
          required
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="enter name"
        />
        <label htmlFor="course"></label>
        <input
          required
          onChange={this.handleChange}
          type="text"
          name="course"
          value={course}
          placeholder="course description"
        />
        <label htmlFor="grade"></label>
        <input
          required
          onChange={this.handleChange}
          type="number"
          name="grade"
          value={grade}
          placeholder="grade"
        />
        <button className="btn waves-effect waves-light">Enter</button>
        <button className="btn waves-effect waves-light" type="button" onClick={this.handleReset}>Reset</button>
      </form>
    )
  }
}

export default AddStudent;
