export function SignupForm({callbackFunction}) {
    
    const submit = (e) => {
        e.preventDefault();
        alert("submit");
    }

    return <form className="container">
        <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address *</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">Password *</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-4">
            <label htmlFor="exampleInputPassword2" className="form-label">Password Check * </label>
            <input type="password" className="form-control" id="exampleInputPassword2" />
        </div>
        <div className="mb-4">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" />
        </div>        
        <button type="submit" className="mt-4 col btn btn-primary" onSubmit={submit}>Submit</button>
    </form>;
}