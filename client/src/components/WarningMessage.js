import "./WarningMessage.css";
export function WarningMessage({ message, className }) {
    return message ? <span className={className}>{message}</span> : null;
}
