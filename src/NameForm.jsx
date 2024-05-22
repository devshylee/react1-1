import { useState } from "react";

export default function NameForm(props){
    const [vlaue, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={value} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}