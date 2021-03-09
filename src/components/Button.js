import React from 'react';

function Button(props) {
    const {id, name, handleMeat, isActive, style} = props

    return (
        <div className="container">
            <button id={id} value={name} className={isActive ? "meatButton Active waves-effect btn-large amber darken-4" : "meatButton waves-effect btn-large amber darken-1"}
                    onClick={(e) => handleMeat(e)} style={style}>
                {name}
            </button>
        </div>
    );
}

export default Button;
