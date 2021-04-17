import React from 'react';

const ChildComponent = props => {
    let {username,age,company,salary}=props.users;
    return (
        <div>
            <h1>i am {username}</h1>
            <p>{age}</p>
            <p>i work for {company}</p>
            <p>i am getting {salary}</p>
        </div>
    );
};
export default ChildComponent;