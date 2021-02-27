import React, {useState} from 'react';

function Customize(props) {
    const {setInstruction} = props
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        setInstruction(text)
        setText("")
    }

    return (
        <div>
            <input value={text} onChange={(e) => handleChange(e)} type="text" placeholder="Add instruction..."/>
            <input onClick={handleSubmit} type="submit" value="Add"/>
        </div>
    );
}

export default Customize;