import { useState } from "react";
import "./LoginForm.css";

export function LoginForm({callbackFunction}) {
    
    const [loginInfo, setLoginInfo] = useState({email:"", password:""});
    const [warningMsg, setWorningMsg] = useState("");

    const handleEmailInput = (e) =>{
        if(warningMsg != ""){
            setWorningMsg("");
        }
        setLoginInfo({
            ...loginInfo,
            email: e.target.value
        });
    }
    const handlePasswordInput = (e) =>{
        if(warningMsg != ""){
            setWorningMsg("");
        }
        setLoginInfo({
            ...loginInfo,
            password: e.target.value
        });
    }

    const submitLoginForm = (e) => {
        e.preventDefault();
        if(loginInfo.email.length == 0 || loginInfo.password.length ==0){
            setWorningMsg("please enter email and password.");            
            return;
        }
        callbackFunction({data : loginInfo});
    }

    return <form className="" onSubmit={submitLoginForm}>
        <div className="mb-4">
            <label htmlFor="inputEmail" className="form-label">Email address</label>
            <input
                onChange={handleEmailInput}
                value={loginInfo.email}
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="name@example.com"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input
                onChange={handlePasswordInput}
                type="password"
                className="form-control"
                id="inputPassword"
            />
        </div>
        <div className="mt-5">
            <button type="submit" className="btn btn-primary">Login</button>
            <span className="login-warning-msg">{warningMsg}</span>            
        </div>           
    </form>;    
}