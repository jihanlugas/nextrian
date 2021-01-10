const ButtonSubmit = ({label = "Submit", className}) => {
    return (
        <button className={"w-full bg-blue-400 hover:bg-blue-500 p-2 rounded-md text-gray-300 hover:text-gray-100 font-bold " + className} type="submit">
            {label}
        </button>
    )
}

export default ButtonSubmit;