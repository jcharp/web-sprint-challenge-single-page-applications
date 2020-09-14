import React, { useState } from "react";
import './index.css';
import * as yup from 'yup';


const Pizza = () => {
    const [name, setName]= useState("");
    const [size, setSize]= useState("");
    const [toppings, setToppings]= useState("");


    return(
        <>
            <h2>Create Your Personalized Pizza</h2>

            <label htmlFor="name">Name</label>
            <input 
                type="text"
                minLenght="2"
                placeholder='Name'
                id='name'
                />


        </>

    )

}

export default Pizza;