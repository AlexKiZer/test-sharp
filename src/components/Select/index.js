import React from "react";
import { Field } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const CustomSelect = (props) => {
    return (
        <Field name={props.name}>
            {({ field, form: { setFieldValue } }) => (
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
                    <Select {...field} {...props}>
                        <option aria-label="None" value="" />
                        {props.options &&
                            props.options.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                );
                            })}
                    </Select>
                </FormControl>
            )}
        </Field>
    );
};
