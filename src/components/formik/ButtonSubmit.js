const ButtonSubmit = ({ label = "Submit", className }) => {
    return (
        <button className={className} type="submit">
            {label}
        </button>
    )
}

export default ButtonSubmit;