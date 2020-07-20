import React from "react";
import App from "./App";
import "./index.css";
import ReactDom from "react-dom";



const Pizza = () => {
    return (
        <>
        <h2> choose your topings</h2>
        <form>
            <label htmlFor='fname'>Name</label>
            <input 
            minLength="2"
            placeholder='Name'
            id="fname"
            type="text"
            
        /> <br/>
        
        <label htmlFor="pizzaSize">Choose Your pizzaSize</label>
        <select>
            
            <option>Large Pie</option>
            <option>Medium Pie</option>
            <option>Small Pie</option>
            <option>Personal Pizza</option>
        </select>
        <br/>

        <label htmlFor="chooseTopings">Choose Your Toppings</label><br/>

        <label htmlFor='Pepperoni'>Pepperoni</label>
        <input type='checkbox' id='Pepperoni'/><br/>

        <label htmlFor='Onions'>Onions</label>
        <input type='checkbox' id='Onions'/><br/>

        <label htmlFor='Mushroom'>Mushrooms</label>
        <input type='checkbox' id='Mushroom'/><br/>

        <label htmlFor='Saussage'>Saussage</label>
        <input type='checkbox' id='Saussage'/><br/>

        <label htmlFor='specialIns'>Special instructions</label>
        <input 
            type="text"
            maxLength='200'
            id='specialins'
            placeholder='Special Instructions'
            />
            <br/>

        <input type='submit'  />


        </form>
        
      </>  

    );
};

export default Pizza;