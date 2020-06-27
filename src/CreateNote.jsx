import React from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./index.css";

const CreateNote = (props) => {
  const inputEvent = (event) => {
    props.inpEvt(event);
  };
  const addEvent = () => {
    props.add();
  };
  const show = () => {
      props.disnone();
  }
  const hide = () => {
      props.valhide();
  }
  return (
    <>
      <div className="note" onClick={show} onMouseLeave={hide}>
        <input
          type="text"
          id='title'
          placeholder="Enter Title"
          name="title"
          value={props.tit}
          onChange={inputEvent}
        ></input>
        {props.val?<textarea
          placeholder="Write Notes"
          name="content"
          value={props.con}
          onChange={inputEvent}
        ></textarea>:null}
        
          <AddCircleIcon onClick={addEvent} className='MuiSvgIcon-root'/>
        
      </div>
    </>
  );
};
export default CreateNote;
