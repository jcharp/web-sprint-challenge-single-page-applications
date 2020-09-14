import React, { useState } from "react";
import './index.css';
import * as yup from 'yup';
import ReactDom from 'react-dom';


const Pizza = () => {
    const [name, setName]= useState("");
    const [size, setSize]= useState("");
    const [toppings, setToppings]= useState("");

    const formSchema = yup.object().shape({
        name: yup.string().required('Name must be at least two characters')
    })

    return(
        <>
            <h2>Create Your Personalized Pizza</h2>

            <label htmlFor="name">Name </label>
            <input onChange={event => {
                setName(event.target.value)
                console.log.apply('this is the name', name);
            }}
                type="text"
                minLength="2"
                placeholder='Name'
                id='name'
                />
            <br/>

            <label htmlFor='size'>Coose your Pizza size </label>
            <select onChange= {event => {
                setSize(event.target.value);
                console.log('this is the pizza size',size)
            }}>

                <option>Large Pie</option>
                <option>Medium Pie</option>
                <option>Small Pie</option>
                <option>Personal Pizza</option>


            </select>

            <br/>

            <label htmlFor='toppings'>Choose your Toppings </label><br/>

            <label htmlFor='pepperoni'>Pepperoni</label>
            <input onChange={event => {
                if(event.target.checked) {setToppings(toppings + "pepperoni")}
            }}
                type='checkbox'
                id='pepperoni'/>
             <br/>

            <label htmlFor='toppings'>Choose your Toppings </label><br/>

            <label htmlFor='pepperoni'>Pepperoni</label>
            <input onChange={event => {
                if(event.target.checked) {setToppings(toppings + "pepperoni")}
            }}
                type='checkbox'
                id='pepperoni'/>
             <br/>



             <label htmlFor='onions'>Onions</label>
            <input onChange={event => {
                if(event.target.checked) {setToppings(toppings + "Onions")}
            }}
                type='checkbox'
                id='onions'/>
             <br/>


             <label htmlFor='mushrooms'>Mushrooms</label>
            <input onChange={event => {
                if(event.target.checked) {setToppings(toppings + "Mushrooms")}
            }}
                type='checkbox'
                id='mushrooms'/>
             <br/>
            
             <label htmlFor='saussage'>Saussage</label>
            <input onChange={event => {
                if(event.target.checked) {setToppings(toppings + "Saussage")}
            }}
                type='checkbox'
                id='saussage'/>
             <br/>
             <br/>

            <label htmlFor='specialInstructions'>Special Instructions <br/>
            <textarea name='specialInstructions'/>
            </label>

            <br/>
            <button type='submit'>Add to Order</button>
            

        

        </>

    )

}

export default Pizza;