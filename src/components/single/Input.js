export default function Input({ name, inputLabel, type, id, placeholder }) {
    return (
        <div>
            <label htmlFor={name}>{inputLabel}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} />
        </div>
    )
}