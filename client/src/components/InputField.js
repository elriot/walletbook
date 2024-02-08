export function InputField({ label, type, name, value, onChange, placeholder, id, className }) {
    return (
        <div className={className}>
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                className="form-control"
                id={id}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}
