import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Table from './table';
import AddStudent from './add_student';
import './app.css';
import 'materialize-css/dist/js/materialize.min';
import axios from 'axios';
import StudentDetails from './student_details';

const dataUrl = '/data/student_grades.json';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentGrades: null
        }
    }
    componentDidMount(){
        this.getStudents();
    }
    addStudent = (student) => {
        const {studentGrades} = this.state;
        const lastId = studentGrades.reduce((largestId, student) => student.id > largestId ? student.id : largestId, 0);
        student.id = lastId + 1;
        this.setState({
            studentGrades: [student, ...studentGrades]
        });
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
    }
    render(){
        const {studentGrades} = this.state;
        return(
            <div className="container">
                <Route exact path="/" render={(props) => <Table {...props} studentGrades={studentGrades} />} />
                <Route path="/add" render={(props) => <AddStudent {...props} addStudent={this.addStudent} />} />
                <Route path="/student-details/:id" component={StudentDetails} />
            </div>
        );
    }
}

export default App;
