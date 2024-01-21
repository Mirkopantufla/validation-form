import React from 'react'

const FormInput = (props) => {
    return (
        <div className='flex flex-col'>
            <label className='text-dark' htmlFor="">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput