'use client'
import React, { useState } from 'react'
import FormInput from "@/components/FormInput";

const page = () => {

    const [values, setValues] = useState({
        email: "",
        rut: "",
        firstName: "",
        lastName: "",
        phone: 0,
        password: "",
        repeatPassword: "",
        termsAndConditions: false
    });

    const inputs = [
        {
            id: "input1",
            name: "email",
            type: "text",
            placeholder: "correo@valido.cl",
            label: "Email",
            aditionalclass: "",
            firstErrorMsg: "Email can't be empty.",
            secondErrorMsg: "El correo debe tener un formato valido"
        },
        {
            id: "input2",
            name: "rut",
            type: "text",
            placeholder: "19456348-2",
            label: "Rut",
            aditionalclass: "",
            firstErrorMsg: "Rut can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input3",
            name: "firstName",
            type: "text",
            placeholder: "Federico",
            label: "First Name",
            aditionalclass: "",
            firstErrorMsg: "First Name can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input4",
            name: "lastName",
            type: "text",
            placeholder: "Lorca",
            label: "Last Name",
            aditionalclass: "",
            firstErrorMsg: "Last Name can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input5",
            name: "phone",
            type: "text",
            placeholder: "569 4055 0785",
            label: "Phone Number",
            aditionalclass: "",
            firstErrorMsg: "Phone can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input6",
            name: "password",
            type: "password",
            placeholder: "************",
            label: "Password",
            aditionalclass: "",
            firstErrorMsg: "Password can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input7",
            name: "repeatPassword",
            type: "password",
            placeholder: "************",
            label: "Repeat Pasword",
            aditionalclass: "",
            firstErrorMsg: "Repeat Password can't be empty.",
            secondErrorMsg: "El campo no puede estar vacio"
        }, {
            id: "input8",
            name: "termsAndConditions",
            type: "checkbox",
            placeholder: "",
            label: "Terms & Conditions",
            aditionalclass: "",
            firstErrorMsg: "It is mandatory to accept the terms and conditions to register."
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        validateForm
    }

    const validateForm = () => {
        values.map((val) => {
            console.log(val)
        })
    }

    const handleChange = (e) => {
        // - Primero, copio todo el contenido de values actual
        // - Segundo, modifico el 'VALUE' segun el 'NAME' del input actual
        setValues({ ...values, [e.target.name]: e.target.value });

        // - Al ser un checkbox, solo debe cambiar del estado de false a true y viceversa.
        if (e.target.type === "checkbox") {
            setValues({ ...values, [e.target.name]: !values[e.target.name] });
        }
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <form className='flex flex-col gap-y-5 border bg-base-neutral border-neutral py-10 px-20' onSubmit={handleSubmit}>
                <h1 className='text-center text-primary text-2xl font-bold py-2 last:bg-white'>Register Form</h1>
                {
                    inputs.map((input) => {
                        return (
                            // Este componente, recibe todos los atributos definidos en el objeto input
                            // Tambien, recibe los valores almacenados en el estado, dependiento del nombre del objeto actual
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
                        )
                    })
                }

                <button className='bg-base-light border border-neutral rounded-md text-primary font-bold p-2 active:scale-95'>Submit</button>
            </form>
        </div>
    )
}

export default page