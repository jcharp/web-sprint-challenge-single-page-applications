import React, { useState, useEffect } from "react";
import './index.css';
import * as yup from 'yup';
import ReactDom from 'react-dom';


const Pizza = () => {
    const [pieType, setPieType] = useState({
        name: "",
        size: "",
        toppings: "",
        id:"",

    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        toppings: "",
        id:"",

    });


    // const [name, setName]= useState('');
    // const [size, setSize]= useState('');
    // const [toppings, setToppings]= useState('');

    const formSchema = yup.object().shape({
        name: yup.string().required('Name must be at least two characters')
    })

    useEffect(() => {
        formSchema.isValid(pieType).then(valid => {

        })

    }, [pieType])



    const pizzaSubmit = e =>{
        e.preventDefault();

    }

    const inputChange = e => {

        const newPieData = {
            ...pieType,
     [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value       

        }
        setPieType(newPieData);
    }

    return(
        <>
            <h2>Create Your Personalized Pizza</h2>
        <form onSubmit={pizzaSubmit}>
               
            <label htmlFor="name">Name </label>
            <input onChange={inputChange}
                type="text"
                minLength="2"
                placeholder='Name'
                id='name'
                
                />
            <br/>

            <label htmlFor='size'>Coose your Pizza size </label>
            <select onChange= {inputChange}>

                <option>Large Pie</option>
                <option>Medium Pie</option>
                <option>Small Pie</option>
                <option>Personal Pizza</option>
                

            </select>

            <br/>

           

            <label htmlFor='toppings'>Choose your Toppings </label><br/>

            <label htmlFor='pepperoni'>Pepperoni</label>
            <input onChange={inputChange}
                type='checkbox'
                id='pepperoni'/>
             <br/>



             <label htmlFor='onions'>Onions</label>
            <input onChange={inputChange}
                type='checkbox'
                id='onions'/>
             <br/>


             <label htmlFor='mushrooms'>Mushrooms</label>
            <input onChange={inputChange}
                type='checkbox'
                id='mushrooms'/>
             <br/>
            
             <label htmlFor='saussage'>Saussage</label>
            <input onChange={inputChange}
                type='checkbox'
                id='saussage'/>
             <br/>
             <br/>

            <label htmlFor='specialInstructions'>Special Instructions <br/>
            <textarea name='specialInstructions' onChange={inputChange} />
            </label>

            <br/>
            <button type='submit'>Add to Order</button>
            

         

        </form>

        </>

    )

}

export default Pizza;