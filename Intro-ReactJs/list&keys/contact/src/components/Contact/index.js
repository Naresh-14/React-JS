import "./index.css"

const Contact = props =>{
    const {contactDetails} = props
    const {name, number} = contactDetails
    return (
        <li>
            <h1>{name}</h1>
            <p>{number}</p>
        </li>
    )
}

export default Contact