import { Fragment } from 'react'
import { FastField } from "formik";

const FieldInput = ({ label, className, placeholder, name, type = 'text' }) => {
    return (
        <div>
            <span>{label}</span>
            <div>
                <FastField
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </div>
    )
}

export default FieldInput;