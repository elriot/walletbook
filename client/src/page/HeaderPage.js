import "./HeaderPage.css";
import { Link } from 'react-router-dom';

export function HeaderPage() {
    return (
        <header>
            <Link to="/" className="fs-3 title">Wallet Book</Link>
            <ul className="fs-6">
                <li>
                    <Link to="/login">
                        <button className="btn btn-outline-light">Login</button>
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