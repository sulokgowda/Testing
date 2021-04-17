import React, { Component, Fragment } from 'react';
import ListAndkeys from "./Component/ListAndkeys";

class App extends Component {
    state={
        employees:[
            {emp_id:1,emp_name:"manu",emp_sal:2000}
            {emp_id:2,emp_name:"minu",emp_sal:200000}
            {emp_id:3,emp_name:"menu",emp_sal:20000}
        ]
    }
    render() {
        let lists=this.state.employees.map(emp=>(
            <Fragment>
                <li>{emp.emp_id}</li>
                <li>{emp.emp_name}</li>
                <li>{emp.emp_sal}</li>
            </Fragment>
        ));
        return (
            <div className="flexbox">
                {this.state.employees.map

                }
            </div>
        )
    }
}
export default App;
