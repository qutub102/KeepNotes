import React, { useState } from "react";
import Header from "./Header";
import CreateNotes from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  
  const [noteArr, setNoteArr] = useState([]);
  const [disnon, setdisnon] = useState(false);
  const addEvent = () => {
    setNoteArr((prev) => {
      if (note.title === "" || note.content === "") {
        alert("Add Title And Note Properly");
        return [...prev];
      } else {
        return [...prev, note];
      }
    });
    setNote({
      title: "",
      content: "",
    });
  };
  const inputEvent = (event) => {
    let { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const deleteNote = (id) => {
    setNoteArr((prev) => {
      return prev.filter((arr, index) => {
        return id !== index;
      });
    });
  };
  const show = () => {
    setdisnon(true);
  };
  const hide = () => {
    setdisnon(false);
  };
  return (
    <>
      <div className="div_main">
        <Header />
        <CreateNotes
          inpEvt={inputEvent}
          add={addEvent}
          tit={note.title}
          con={note.content}
          disnone={show}
          val={disnon}
          valhide={hide}
        />
        {noteArr.map((cval, index) => {
          return (
            <Note
              key={index}
              id={index}
              tit={cval.title}
              con={cval.content}
              delete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
