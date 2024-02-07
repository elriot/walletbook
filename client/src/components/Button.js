export function Button({ message, type = "primary", outline = false }) {
    //type : https://getbootstrap.com/docs/5.0/components/buttons/
    // {primary : "blue"}, {secondary : "gray"}, {success : "green"}, {danger:"red"}, 
    // {warning:"yellow"}, {info : "light-blue"}, {light : "light-gray"}, {dark : "black"}, 
    // {link : "blue-underline"}
    var classString = `btn btn-${outline ? "outline-" : ""}${type}`;

    return <button className={classString}>{message}</button>;
}
