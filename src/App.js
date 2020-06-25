import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Scroll from './component/Scroll/Scroll';
import Blog from './component/Blog/Blog';
import {TITLE,CONTENT} from "./component/contentItem/Types"
import Foter from './component/foter/Foter'
import Grid from './component/Grid/Grid'
import NotFound from "./component/NotFound/NotFound"
import  {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {User,UseOfArray} from './component/Grettings/Grettings'
import Todo from './component/todo/Todo';
import Calculator from './component/calculator/Calculator';
import Write from './component/write/Write';

 const x=[
       {title:"this is tttile",content:"tttthis is contttent",imgUrl:"https://cdn-images-1.medium.com/fit/c/200/200/0*Lw3GLkgHDP11cOwR"},
       {title:"this is tttile",content:"tttthis is contttent" ,imgUrl:"https://cdn-images-1.medium.com/fit/c/200/200/0*Lw3GLkgHDP11cOwR"} ]
 const y=[{type:"title",data:"This is title"}]
      


export default function App(){
  return (
    <Router>
      <Nav/>
        <switch>
          <Route path="/" component={ Grid} exact/>   
          <Route path="/array" component={ User} exact/>
          <Route path="/arraypro" component={ UseOfArray} exact/>
          <Route path="/todo" component={Todo} exact/>
          <Route path="/scroll" component={ Scroll} exact/>
          <Route path="/blog" component={ Blog} exact/>
          <Route path="/cal" component={ Calculator} exact/>
          <Route path="/wri" component={ Write} exact/>
          
          {/* <Route component={NotFound}/> */}
        </switch>
        <Foter/>
    </Router>

  );
}


