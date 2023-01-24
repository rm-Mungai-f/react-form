import React from "react";
import ReactDOM from "react-dom/client";

const LoginForm=()=>{
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="text"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoginForm/>
);