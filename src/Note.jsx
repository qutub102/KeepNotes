import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './index.css'
const Note = (props) => {
    const del = () => {
        props.delete(props.id);
    }
    return(
        <>
            <div className='notes'>
                <h3>{props.tit}</h3>
                <hr/>
                <p>{props.con}</p>
                <DeleteForeverIcon onClick={del} />
            </div>
        </>
    );
}

export default Note;