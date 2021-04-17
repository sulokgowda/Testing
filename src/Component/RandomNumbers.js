import React, { Component } from 'react';

class RandomNumbers extends Component {
    state={
        random:0,
    };
    Random=()=>{
        this.setState({random: Math.round(Math.random()*100) });
    }
    render(){
        return (
            <div>
                <h1>{this.state.random}</h1>
                <button onClick={this.Random}>Click for random numbers</button>
            </div>
        );
    }
}

export default RandomNumbers;
