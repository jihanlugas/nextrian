import { Fragment } from 'react'
import { FastField } from "formik";

const FieldInput = ({ label, className, placeholder, name, }) => {
    return (
        <div>
            <span>{label}</span>
            <div>
                <FastField
                    type="password"
                    className={"p-2 bg-white w-full rounded-md border-2 border-gray-900 " + className}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </div>
    )
}

export default FieldInput;