/* import { createStore } from "redux";
import { useState } from "react";

const User = () =>{

    const [style,setStyle] = useState({color : "black"});

    const reducer = (state=style,action) =>{
       if(action.type == "red"){
        return state = {
            color :"red"
        }
       }
        else if(action.type == "yellow"){
        return state = {
            color :"yellow"
        }
       }
       if(action.type == "orange"){
        return state = {
            color :"orange"
        }
       }
       if(action.type == "pink"){
        return state = {
            color :"pink"
        }
       }
    }

   const store = createStore(reducer);

   store.subscribe(()=>{
    const response = store.getState();
    setStyle(response);
   })

const design =(
    <>
    <select 
    onChange={(e)=>store.dispatch({
        type : e.target.value
    })}
    style={{ width : "400px" ,padding : "13px"}}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
    </select>
    <br /> <br />
    <h1 style={style}>Just for Code</h1>
    </>
);

return design;
}

export default User;
 */


import React, {useState} from "react";

const User = () =>{

    const[style,setStyle] = useState({color : "black"})
    const design = (
        <>
        <select 
        onChange = {(e)=>{
            const selectedColor = e.target.value;
            setStyle({color : selectedColor})
        }}
        style={{ width : "400px" ,padding : "13px"}}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
        </select>
        <br /><br />
        <h1 style={style}>Just for Code</h1>
        </>
    ) 

    return design;
}

export default User;










/* import { createStore } from "redux";
import { useState } from "react";
const User = ({data}) =>{

    const [value,setValue] = useState("");

    const reducer = (state=value,action) =>{
        if(action.type === "login"){
            state = "login Success !";
             return state;
        }
        else{
                state = "login failed !";
                 return state;
        }
    }

    const store = createStore((reducer));
    store.subscribe(()=>{
           const response = store.getState();
           setValue(response);
    })
    const design = (
    <>
    <h1>{value} </h1>

    <button
    onClick={()=>{
        store.dispatch({
            type : "login"   //login Action
        })
    }}>Click ME</button>
    </>
      
    );
  
    return design;
  } */
  /* 
  export default User; */