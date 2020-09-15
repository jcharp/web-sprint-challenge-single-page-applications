import React, { useState, useEffect } from "react";
import './index.css';
import * as yup from 'yup';
import ReactDom from 'react-dom';
import axios from 'axios';


const Pizza = () => {

    const [post, setPost] = useState([])

    const [pieType, setPieType] = useState({
        name: "",
        size: "",
        toppings: "",
        id:"",
        specialInstructions: "", 

    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        toppings: "",
        id:"",
        specialInstructions: "",

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
        axios.post("https://reqres.in/api/users", pieType )
        .then(response => {
            setPost(response.data);
            setPieType({
                name: "",
                size: "",
                toppings: "",
                id:"",
                specialInstructions: "", 
            });
        }).catch(err => console.log(err.response));

    }

    const inputChange = e => {

        const newPieData = {
            ...pieType,
     [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value       

        }
        setPieType(newPieData);

        console.log("pie type", pieType);
    }

    return(
        <>
            <h2>Create Your Personalized Pizza</h2>
        <form onSubmit={pizzaSubmit}>
               
            <label htmlFor="name">Name </label>
            <input onChange={inputChange} value={pieType.name}
                type="text"
                minLength="2"
                placeholder='Name'
                id='name'
                name="name"
                
                />
            <br/>

            <label htmlFor='size'>Coose your Pizza size </label>
            <select onChange= {inputChange}  >

                <option>Large Pie</option>
                <option>Medium Pie</option>
                <option>Small Pie</option>
                <option>Personal Pizza</option>
                

            </select>

            <br/>

           

            <label htmlFor='toppings'>Choose your Toppings </label><br/>

            <label htmlFor='pepperoni'>Pepperoni</label>
            <input onChange={inputChange} value={pieType.toppings}
                type='checkbox'
                id='pepperoni'/>
             <br/>



             <label htmlFor='onions'>Onions</label>
            <input onChange={inputChange} value={pieType.toppings}
                type='checkbox'
                id='onions'/>
             <br/>


             <label htmlFor='mushrooms'>Mushrooms</label>
            <input onChange={inputChange} value={pieType.toppings}
                type='checkbox'
                id='mushrooms'/>
             <br/>
            
             <label htmlFor='saussage'>Saussage</label>
            <input onChange={inputChange} value={pieType.toppings}
                type='checkbox'
                id='saussage'/>
             <br/>
             <br/>

            <label htmlFor='specialInstructions'>Special Instructions <br/>
            <textarea name='specialInstructions' onChange={inputChange} value={pieType.specialInstructions}/>
            </label>

            <br/>
            <button type='submit'>Add to Order</button>
            
            <pre>{JSON.stringify(post, null, 2)}</pre>
         

        </form>

        </>

    )

}

export default Pizza;