import React from "react";

const Input = (props) => {
    return <input {...props.input}>{props.label}</input>;
};

export default Input;
