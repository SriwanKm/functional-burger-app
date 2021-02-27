import React from 'react';
import {Button} from './Index'

function ButtonList(props) {
    const {setMeats, toggleActive, meats} = props

    return (
        <>
            {meats.map(el => <Button handleMeat={toggleActive} setMeats={setMeats} name={el.name} id={el.id} key={el.id}
                                     imgUrl={el.img_url}
                                     isActive={el.isActive}/>)}
        </>
    );
}

export default ButtonList;
