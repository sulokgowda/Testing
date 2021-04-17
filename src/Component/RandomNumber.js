import React,{useState} from 'react'

const RandomNumber = () => {
    let [random,setRandom] = useState(0);
    let RandomNum=()=>{
        setRandom(Math.round(Math.random()*100));
    };
    return (
        <div>
           <h1>{random}</h1>
           <button onClick={RandomNum}>RandomNumbers</button> 
        </div>
    );
};

export default RandomNumber

