import React, { useState } from 'react'
import style from './Todo.module.css'

 export default function Todo(){
    
    const x=["fixed","value","showing"]
    const [inputval,setinputval]=useState("")
    const [task,settask]=useState([])



    let y=10
    let [xy,setxy]=useState("")
    console.log("task",task)
return(
    <div class="xparent">
        <h1 >Todo</h1>
        <br/>
        <div>
          <form
          onSubmit={(e)=>{e.preventDefault()}}
          > <input  onChange={(e)=>{setinputval(e.target.value) }} value={inputval}>   
           </input> 
           <button type="submit" onClick={()=>{
            console.log("val",task)                         
            settask(t=>[...t,inputval])
            setinputval("")
            }}>add </button> </form>

           <p> {inputval}   </p>    

     {/* showing array */}

     {/* removeItem(index) {
  const list = this.state.list;

  list.splice(index, 1);
  this.setState({ list });
} */}
           { task.map((item,index)=>
           ( <p> {item} <img 
            onClick={()=>{
               const x=task.slice(index-1,index+1)
               settask(x)
               console.log("delete",task)
           }}
            src="https://i.pinimg.com/originals/94/b4/7e/94b47e3843f8944e5a1e506a8322c060.png" height="50" weight="50" /> </p> ))}
       

        </div>
         

    </div>
)
}