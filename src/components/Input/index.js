import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const Input = (props) => {
    return (
        <Field name={props.name}>
            {({ field, form }) => <TextField {...field} {...props} />}
        </Field>
    );
};
