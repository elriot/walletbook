export function Button({ message, style = "primary", outline = false }) {
    //type : https://getbootstrap.com/docs/5.0/components/buttons/
    // {primary : "blue"}, {secondary : "gray"}, {success : "green"}, {danger:"red"}, 
    // {warning:"yellow"}, {info : "light-blue"}, {light : "light-gray"}, {dark : "black"}, 
    // {link : "blue-underline"}
    let classString = `btn btn-${outline ? "outline-" : ""}${style}`;

    return <button className={classString}>{message}</button>;
}
