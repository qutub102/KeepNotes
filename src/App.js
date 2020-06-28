import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateNotes from "./CreateNote";
import Note from "./Note";

const App = () => {
  var localNote = localStorage.getItem("notes");
  if (localNote === null) {
    var noteObj = [];
  } else {
    noteObj = JSON.parse(localStorage.getItem("notes"));
  }
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteArr, setNoteArr] = useState([]);
  useEffect(() => {
    localNote = localStorage.getItem("notes");
    if (localNote === null) {
      var noteObj = [];
    } else {
      noteObj = JSON.parse(localStorage.getItem("notes"));
    }
  }, [noteArr]);
  const [disnon, setdisnon] = useState(false);
  const addEvent = () => {
    // setNoteArr((prev) => {
    //   if (note.title === "" || note.content === "") {
    //     alert("Add Title And Note Properly");
    //     return [...prev];
    //   } else {
    //     return [...prev, note];
    //   }
    // });
    noteObj.push(note);
    localStorage.setItem("notes", JSON.stringify(noteObj));
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
    setNoteArr(() => {
      // var removeIndex = noteObj
      //   .map(function (item, index) {
      //     return index;
      //   })
      //   .indexOf(id);

      // remove object
      noteObj.splice(id, 1);
      localStorage.setItem("notes", JSON.stringify(noteObj));
      return noteObj;  
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
        {/* {noteArr.map((cval, index) => {
          return (
            <Note
              key={index}
              id={index}
              tit={cval.title}
              con={cval.content}
              delete={deleteNote}
            />
          );
        })} */}
        {noteObj.map((cval, index) => {
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
