import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';


const App = () => {
  return (
    <>
      <Link to='./pizza'>Build your Pizza</Link>
      <br/>
      <Link to='/'>Home</Link>


      <Route exact path='/' component={Home}/>
      <Route path ='/pizza' component={Pizza}/>
    </>
  );
};
export default App;
