'use client'
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";

const PasswordInput = (props) => {

    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <div className='relative'>
            <input
                className={`w-full p-2 border border-neutral shadow-sm shadow-neutral-light`}
                type={togglePassword ? "text" : "password"}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            <button
                className='absolute inset-y-0 right-2 text-lg text-primary hover:scale-105 hover:text-neutral-light'
                onClick={() => setTogglePassword(!togglePassword)}>
                <FaEye />
            </button>
        </div>
    )
}

export default PasswordInput