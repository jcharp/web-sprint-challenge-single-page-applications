import React, { useState } from "react";
import App from "./App";
import "./index.css";
import ReactDom from "react-dom";
import axios from 'axios';
import * as yup from "yup";



const Pizza = () => {
    const [ name, setName ] = useState('');
    const [ size, setSize ] = useState('');
    const [ toppings, setToppings ] = useState('');


    const formSchema = yup.object().shape({
        name: yup.string().required("Name must be at least two characters")
    })
    return (
        <>
        <h2> choose your topings</h2>
        <form onSubmit={event => {
            event.preventDefault();
        }}>
            <label htmlFor='fname'>Name</label>
            <input onChange={event => {
                setName(event.target.value);
                console.log('this is the name', name);
               
            }}
            minLength="2"
            placeholder='Name'
            id="fname"
            type="text"
            
        /> <br/>
        
        <label htmlFor="pizzaSize">Choose Your pizzaSize</label>
        <select onChange= {event => {
            setSize(event.target.value);
            console.log('this is the size', size);
        }}>
            
            <option>Large Pie</option>
            <option>Medium Pie</option>
            <option>Small Pie</option>
            <option>Personal Pizza</option>
        </select>
        <br/>

        <label htmlFor="chooseTopings">Choose Your Toppings</label><br/>

        <label htmlFor='Pepperoni'>Pepperoni</label>
        <input onChange={event => {
            if (event.target.checked) {setToppings(toppings +"Pepperoni ")}
              console.log('toppings',toppings);
        }} type='checkbox' id='Pepperoni'/><br/>

        <label htmlFor='Onions'>Onions</label>
        <input onChange={event => {
            if (event.target.checked) {setToppings(toppings + "Onions ")}
              console.log('toppings',toppings);
         }} type='checkbox' id='Onions'/><br/>

        <label htmlFor='Mushroom'>Mushrooms</label>
        <input onChange={event => {
            if (event.target.checked) {setToppings(toppings + "Mushrooms ")}
              console.log('toppings',toppings);
         }} type='checkbox' id='Mushroom'/><br/>

        <label htmlFor='Saussage'>Saussage</label>
        <input  onChange={event => {
            if (event.target.checked) {setToppings(toppings + "Saussage ")}
              console.log('toppings',toppings);
         }}type='checkbox' id='Saussage'/><br/>

        <label htmlFor='specialIns'>
            Special instructions <br/>
            <textarea name="specialIns" />
        </label>

        
            <br/>
         <button type="submit">Add to Order</button>


        </form>
        
      </>  

    );
};

export default Pizza;