import {Field} from "redux-form";
import React from "react";


export const required = value => {
    if(value) return undefined;
    return `Field is required`
}


export const maxLengthCreator =(maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} characters`;
    return undefined;
}
export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
    <Field placeholder={placeholder} name={name}
           validate={validators}
           component={component}
        {...props}/>{text}
    </div>
)
