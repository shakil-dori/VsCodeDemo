import React, { useState } from 'react'
import style from './Calculator.module.css'

 export default function Calculator(){
    let [x,setx]=useState("")
    let [y,sety]=useState("")
    let [result,setresult]=useState("")
     return(
         <div class="xparent">
             
                <input onChange={ (e)=> {setx(e.target.value)} } ></input>
                <input onChange={(e) => {sety(e.target.value)} }></input>
                <br/>
                <button onClick={ () => { setresult(x += y) 
                                          console.log("resul",result) }         }>add not working </button>
                <button onClick={ () => { setresult(x-y) 
                                          console.log("resul",result) }         }>min</button>
                <button onClick={ () => { setresult(x*y) 
                                          console.log("resul",result) }         }>mul</button>
                <button onClick={ () => { setresult(x/y) 
                                          console.log("resul",result) }         }>div</button>
                <br/>
                <input value={result} ></input>

         </div>
         
 )}