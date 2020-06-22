import React from 'react';
import style from './Grid.module.css';
import Nav from '../Nav/Nav.js'

export default function Grid (){
    return(
        <div class="grandparent">
            <Nav/>
            <div class="gparent">
                    
                    <div class="a1">
                        <p>this is one</p>
                    </div>

                    <div class="a2">
                        <p>this is two</p>
                    </div>

                    <div class="a3">
                        <p>this is three</p>
                    </div>

                    <div class="a4">
                        <p>this is four</p>
                    </div>

                    <div class="a5">
                        <p>this is five</p>
                    </div>

                    <div class="a6">
                        <p>this is sex</p>
                    </div>

                    <div class="a7">
                        <p>this is heaven</p>
                    </div>

                    <div class="a8">
                        <p>this is eight</p>
                    </div>
            </div>

        </div>
        //   <div>
        //   <ProductIem name="kamrul"  details="his is props/"/>
        //   <ProductIem name="kamrul"  details="his is props"/>
        //   <ProductIem name="kamrul"  details="his is props"/>
      
        // </div>
    )
}

function ProducItem (props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.details}</p>
        </div>
    )
}