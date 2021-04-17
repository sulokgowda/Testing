import React, { Component } from 'react'

class ChildwithClassBased extends Component {
    render() {
        let {username,age,company,salary,designation} = this.props.users;
        return (
            <div>
               <h1>i am {username}</h1>
               <p>{age}</p>
               <p>{company}</p>
               <p>{salary}</p>
               <p>{designation}</p>
            </div>
        )
    }
}
export default ChildwithClassBased;
