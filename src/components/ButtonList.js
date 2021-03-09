import React from 'react';
import {Button} from './Index'

function ButtonList(props) {
    const {setMeats, toggleActive, meats} = props

    return (
        <div>
            
            {meats.map(el => <Button style={{margin: "5px"}} handleMeat={toggleActive} setMeats={setMeats} name={el.name} id={el.id} key={el.id}
                                     isActive={el.isActive}/>)}
        </div>
    );
}

export default ButtonList;
