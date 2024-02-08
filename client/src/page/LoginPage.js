import { LoginForm } from "../forms/LoginForm"
import "./LoginPage.css"

export function LoginPage() {
    
    const sumbitLoginForm = ({data}) => {
        console.log("form Data", data);
    }

    return <div className="form-container">
        <LoginForm callbackFunction={sumbitLoginForm}/>
    </div>
}