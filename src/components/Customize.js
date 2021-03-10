import React, {useState} from 'react'

const Customize = ({setInstruction}) => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e?.target?.value)
    }

    const handleSubmit = () => {
        setInstruction(text)
        setText("")
    }

    return (
        <div>
            <div className="card" style={{margin: "20px 50px"}}>
                <div style={{margin: "20px 50px"}} className="input-field col s6">
                    <i className="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2"
                              className="materialize-textarea"
                              value={text} onChange={(e) => handleChange(e)} type="text"/>
                    <label htmlFor="icon_prefix2">Customize your burger</label>

                </div>
            </div>
            <button name="action" className="btn waves-effect waves-light" onClick={handleSubmit} type="submit"
                    value="Add">Add
            </button>
        </div>
    )
}

export default Customize