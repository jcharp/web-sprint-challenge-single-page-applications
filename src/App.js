import React from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./Pizza";
import "./index";
import Home from "./Home";




const App = () => {
  return (
    <>
      
      <Link to="/pizza"> Build Your Pizza </Link>
      <Link to="/"> Home </Link>


       <Route exact path='/' component={Home}/>   
      <Route exact path="/pizza" component={Pizza}/>
      
      
      
    </>
  );
};
export default App;
