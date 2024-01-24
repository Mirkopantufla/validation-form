import React from 'react'

const TermsAndConditions = (props) => {

    return (
        <div className=''>
            <div className='flex justify-center'>
                <label
                    className='text-secondary-light font-bold text-lg me-3'
                    htmlFor=""
                >
                    {props.label}
                </label>
                <input type="checkbox" name={props.name} id={props.id} onChange={props.onChange} />
            </div>
            <small>{props.errorMessage}</small>
        </div>

    )
}

export default TermsAndConditions