import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {EmployeesContainer} from './component/Employees/EmployeesContainer';
import Header from './component/Header/Header';
import Main from './component/MainPage/Main';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="wrapper-content">
                <Route exact path="/" render={() => <Main/>}/>
                <Route path="/employees" render={() => <EmployeesContainer/>}/>
            </div>
        </div>
    );
}

export default App;
