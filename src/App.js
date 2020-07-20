import React from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./Pizza";
import "./index";


const App = () => {
  return (
    <>
      
      <Link to="/pizza"> Build Your Pizza </Link>
      <Link to="/"> Home </Link>


       <Route exact path='/' />     
      <Route exact path="/pizza" component={Pizza}/>
      <h1>Pizza While you Learn</h1>
      
      
    </>
  );
};
export default App;
