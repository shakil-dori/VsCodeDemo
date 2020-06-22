import React from 'react';
import style from './Grettings.module.css'
import {Value,array,arraypro} from '../MyValue/MyValue'

export default function Grettings(){
    return(
        <div>
            <h1>Hello Wor</h1>
        </div>
    )
}
export function User(props){
    return(
        <div>
            
    <h1>hello {props.y}</h1>
    <h1>this is objectt = {Value.name} and <h1> <br/>
     </h1> this is email = {Value.email}</h1>

   
    </div>
    )
}
export function UseOfArray(props){
    return(
        <div>
             { array.map(item=>(
                 <h1>{item}</h1>))}
             { arraypro.map(item=>(
                 <div>
                 <h1>{item.name}</h1>
                 <br/>
                 <h1>{item.email}</h1>
                 </div>))
             }
            
        </div>
    )
}