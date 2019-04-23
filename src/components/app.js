import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { NavLink, Route} from 'react-router-dom';
import Table from './table';
import AddStudent from './add_student';
import './app.css';
import 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

const dataUrl = 'data/student_grades.json';

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
                <div className="row">
                    <div className="col s12 m5">
                        {error.message}. The student grades are not available. Please try again later.
                        <div className="card-panel teal">
                            {error.config.url}
                            <div className="white-text">
                                {error.stack}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="container">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/add">Add Student</NavLink></li>
                </ul>
                <Route exact path="/" render={(props) => <Table {...props} studentGrades={studentGrades} />} />
                <Route path="/add" render={(props) => <AddStudent {...props} addStudent={this.addStudent} />} />
            </div>
        );
    }
}

export default App;
