import React, { useState } from 'react'
import style from "./Write.module.css"

export default function Write(){
    const [y,sety]=useState([])
    const produc=[{vivle:"his is vivle",des:"his is des"},{vivle:"his is vivle22",des:"his is des2"}]
    const [cart,setCart]=useState([])

    const  Add2cart=(pos)=>{
    //  setCart(old=>[...old,newItem])   
    console.log("add to cart",pos)
    }

    return(
        <div class={style.parent} >
            
            <button onClick={()=>{sety(old=>[...old,{pos:old.length,val:""}])}}>add y</button>
            {
            y.map((item,pos)=>(<Custominput pos={pos} setVal={sety} />))
            }
            <CustomProduc Add2cart={Add2cart} produc={produc}/>
        </div>
    )
}         

function Custominput(props){

    return<input autoFocus 
    onChange={(e)=>{
        const newVal={pos:props.pos,val:e.target.value}
        console.log("new val",newVal)

        props.setVal(old=>[...old,newVal])
    }}/>
}
function CustomProduc (props){
    return(
        props.produc.map((item,pos)=>(
            <div>
                <h1>{item.vivle}</h1>
                <h5>{item.des}</h5>
                <button onClick={()=>
                 {props.Add2cart(pos)}   
                    
                }> add2cart</button>
            </div>
        ))
    )
}
