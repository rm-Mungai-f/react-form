import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const LoginForm=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }

    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        alert(email+' '+password);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" value={email} onChange={handleEmail} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password} onChange={handlePassword} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoginForm/>
);