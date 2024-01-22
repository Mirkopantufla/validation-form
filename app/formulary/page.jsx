'use client'
import React, { useState } from 'react'
import FormInput from "@/components/FormInput";

const page = () => {

    const [values, setValues] = useState({
        email: "",
        rut: "",
        firstName: "",
        lastname: "",
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
            label: "Email"
        },
        {
            id: "input2",
            name: "rut",
            type: "text",
            placeholder: "19456348-2",
            label: "Rut"
        }, {
            id: "input3",
            name: "firstName",
            type: "text",
            placeholder: "Federico",
            label: "First Name"
        }, {
            id: "input4",
            name: "lastName",
            type: "text",
            placeholder: "Lorca",
            label: "Last Name"
        }, {
            id: "input5",
            name: "phone",
            type: "text",
            placeholder: "569 4055 0785",
            label: "Phone Number"
        }, {
            id: "input6",
            name: "password",
            type: "password",
            placeholder: "************",
            label: "Email"
        }, {
            id: "input7",
            name: "repeatPassword",
            type: "password",
            placeholder: "************",
            label: "Repeat Pasword"
        }, {
            id: "input8",
            name: "termsConditions",
            type: "checkbox",
            placeholder: "",
            label: "Terms & Conditions"
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <form className='flex flex-col gap-y-4 border border-lime-700 p-12' onSubmit={handleSubmit}>
                {
                    inputs.map((fild) => {
                        return (
                            <FormInput key={fild.id} placeholder={fild.placeholder} type={fild.type} label={fild.label} />
                        )
                    })
                }

                <button>Submit</button>
            </form>
        </div>
    )
}

export default page