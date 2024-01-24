import React from 'react'
import PasswordInput from './PasswordInput'
import TermsAndConditions from './TermsAndConditions';

const FormInput = (props) => {

    //Aqui, separo los props, para dar un menejo mas ordenado
    // otherProps contiene: name, type, placeholder, class
    const { id, onChange, firstErrorMsg, secondErrorMsg, aditionalclass, ...otherProps } = props;

    // Asigna propiedades al container dependiendo del tipo de input, ya que se ven de diferente manera y se deben tratar de diferente manera.
    const containerClasses = (type) => {
        if (type === "text" || type === "password" || type === "email" || type === "number") {
            return "flex-col w-full"
        }
    }

    // Asigna propiedades al input dependiendo del tipo de este.
    const inputClasses = (type) => {
        if (type === "text" || type === "password" || type === "email" || type === "number") {
            return "p-2 border border-neutral shadow-sm shadow-neutral-light hover:scale-95"
        }
    }

    //De esta manera, se puede personalizar y dar cualidades a algunos inputs con el nombre
    const inputTypeIdentifier = (typeSearch) => {

        if (typeSearch === "password") {
            return <PasswordInput {...otherProps} onChange={onChange} errorMessage={firstErrorMsg} />
        } else if (typeSearch === "checkbox") {
            return <TermsAndConditions {...otherProps} onChange={onChange} errorMessage={firstErrorMsg} />
        } else {
            return (
                <div className={`flex justify-center ${containerClasses(props.type)} ${aditionalclass}`}>
                    <label
                        className='text-secondary-light font-bold text-lg'
                        htmlFor=""
                    >
                        {otherProps.label}
                    </label>
                    <input
                        className={`${inputClasses(otherProps.type)}`}
                        {...otherProps}
                        onChange={onChange}
                    />
                    <small>{firstErrorMsg}</small>
                </div>
            )
        }
    }


    return (
        <>
            {
                inputTypeIdentifier(otherProps.type)
            }
        </>


    )
}

export default FormInput