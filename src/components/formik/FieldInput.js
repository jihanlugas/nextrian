import { Fragment } from 'react'
import { FastField } from "formik";

const FieldInput = ({label, className, placeholder, name, type = 'text'}) => {
    return (
        <Fragment>
            <span>{label}</span>
            <div>
                <FastField
                    type={type}
                    className={"p-2 bg-white w-full rounded-md border-2 border-gray-900 " + className}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </Fragment>    
    )
}

export default FieldInput;