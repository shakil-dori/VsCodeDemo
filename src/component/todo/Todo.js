import React, { useState } from 'react'
import style from './Todo.module.css'

 export default function Todo(){

    const x=["fixed","value","showing"]
    const [inputval,setinputval]=useState("")
    const [task,settask]=useState([])
     return(
         <div class="xparent">

                    <h1 >Todo</h1>
                    <br/>
                    <div>
                        <input onChange={(e)=>{setinputval(e.target.value) }} value={inputval}>
                            
                        </input>
                        <button onClick={()=>{
                            console.log("val",task)
                            
                            settask(t=>[...t,inputval])

                            setinputval("")
                            }}>add </button>
                    </div>
                    {x.map(item=>(
                    <h1>{item}</h1>))}
                    
                    {task.map(item=>(
                    <h1>{item}</h1>))}
                    

         </div>
     )
 }