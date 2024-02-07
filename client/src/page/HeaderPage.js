import { Button } from "../components/Button";
import { Link } from 'react-router-dom';
import "./HeaderPage.css";

export function HeaderPage() {
    return (
        <header>
            <Link to="/" className="fs-3 title">Wallet Book</Link>
            <ul className="fs-6">
                <li>
                    <Link to="/login">
                        <Button message="Login" type="light" outline="true"/>
                    </Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </header>
    );
}