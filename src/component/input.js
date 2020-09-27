import React from "react";

const Input = (props) => {

    const {label, name, message, onChange, error,isPassword} = props;
    const className = message === name ? "form-control is-invalid" : "form-control";

    return (
        <div className={"form-group"}>
            <label>{label}</label>
            <input name={name}
                   className={className}
                   type={isPassword ? "password" : ""}
                   onChange={onChange}/>
            <div className="invalid-feedback">
                {error}
            </div>
        </div>
    );


};


export default Input;