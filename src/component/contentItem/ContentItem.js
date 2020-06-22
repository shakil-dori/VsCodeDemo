import React from  'react'
import style from "./contentItem.module.css"
import {TITLE,CONTENT} from "./Types"

export default function ContentItem(props){
    const type=props.y.type;
    console.log("type",type);
    
    if(type==="title"){
        return <Title data={props.y.data}/>
    }

    else if(type==="content"){
        return <Paragraph data={props.y.data}/>
    }
    else{
        return<h1>Empty</h1>
    }
    // return(
    //     <div>
    //         <h1 style={style.title} >{props.data.title}</h1>           
    //         <img style={style.picture} src={props.data.imgUrl}/>
    //         <p style={style.content}>{props.data.content}</p>
    //     </div>
    // )
}


function Title(props){
    return(
    <h1>{props.data}</h1>
    )
}

function Paragraph(props){
    return(
    <h1>{props.data}</h1>
    )
}
