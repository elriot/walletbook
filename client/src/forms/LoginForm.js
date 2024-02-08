import { useState } from "react";
import { InputField } from "../components/InputField";
import { WarningMessage } from "../components/WarningMessage";
import { Button } from "../components/Button";

export function LoginForm({ callbackFunction }) {

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const [warningMsg, setWorningMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (warningMsg !== "") {
            setWorningMsg("");
        }
        // console.log("name, value", name, value)
        setLoginInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitLoginForm = (e) => {
        e.preventDefault();
        if (loginInfo.email.length == 0 || loginInfo.password.length == 0) {
            setWorningMsg("please enter email and password.");
            return;
        }
        callbackFunction({ data: loginInfo });
    }

    return <form onSubmit={submitLoginForm}>
        <InputField
            label="Email address"
            className="mb-4"
            type="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            placeholder="name@example.com"
            id="inputEmail"
        />
        <InputField
            className="mb-5"
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            id="inputPassword"
        />
        <Button type="submit" style="primary" message="Login"/>
        <WarningMessage className="m-3 warning-gray" message={warningMsg}/>
    </form>;
}