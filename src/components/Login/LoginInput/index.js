import React from "react";
import "./index.css";

function LoginInput(props){
    let { identifier, updateCredentials } = props;
    let labelValue = identifier.slice(0, 1).toUpperCase() + identifier.slice(1, identifier.length);
    return (
        <>
            <label htmlFor={identifier}>{labelValue}</label>
            <input onChange={updateCredentials} type={identifier === "password" ? "password" : "text"} id={identifier} name={identifier} />
        </>
    );
}

export default LoginInput;