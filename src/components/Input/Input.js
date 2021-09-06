import React from "react";

const Input = (props) => {
    return (
        <div className="input__wrap">
            <input className="input" {...props.input}>
                {props.label}
            </input>
        </div>
    );
};

export default Input;
