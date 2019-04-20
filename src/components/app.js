import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import Table from './table';
import AddStudent from './add_student';
import './app.css';

const App = () => (
    <div className="container">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">Add Student</NavLink></li>
        </ul>
        <Route exact path="/" component={Table} />
        <Route path="/add" component={AddStudent} />
    </div>
);

export default App;
