import React from 'react';

function Button(props) {
    const {id, imgUrl, name, handleMeat, isActive} = props

    return (
        <div className={"container"}>
            <img id={id} alt={name} src={imgUrl} className={isActive ? "meatButton Active" : "meatButton"}
                 onClick={(e) => handleMeat(e)}/>
        </div>
    );
}

export default Button;
