import React, { useState } from "react";
import "./Menu.css";

function TBbuttons(props) {
  let textbooks = props.textbooks;
  return textbooks.map(function (textbook, index) {
    return (
      <button className="TB-Button" key={index}>
        {textbook.name}: {textbook.description}
      </button>
    );
  });
}

function Menu() {
  const [formClass, setformClass] = useState("FormOFF");
  const [value, setValue] = useState("");
  const [descriptionvalue, setDValue] = useState("");

  // Display and remove form
  const FormDisp = () => {
    setformClass("FormON");
  };
  const FormClose = () => {
    setformClass("FormOFF");
  };

  // first tb

  const [textbook, setTextbook] = useState({
    name: "Economics",
    description: "fun",
  });

  // Handle form

  const handleSubmit = (e) => {
    e.preventDefault();
    setDValue(descriptionvalue);
    setTextbooks(
      Textbooks.concat({
        name: value,
        description: descriptionvalue,
      })
    );
    setValue("");
    setDValue("");
  };

  // Handle textbook data

  const [Textbooks, setTextbooks] = useState([
    textbook,
    {
      name: "Physics",
      description: "boring",
    },
    {
      name: "Chemistry",
      description: "okay",
    },
  ]);

  return (
    <div className="Menu">
      <div className="Navbar">
        <button className="NB-Button">Home</button>
        <button className="NB-Button">Info</button>
        <button className="NB-Button">Settings</button>
      </div>
      <div className="Body">
        <div className="GridRegion">
          <div className="Grid">
            <TBbuttons textbooks={Textbooks}></TBbuttons>
            <button className="Add-TB" onClick={() => FormDisp()}>
              Add textbook
            </button>
          </div>
        </div>
        <div className={formClass}>
          <form onSubmit={handleSubmit}>
            <label>Textbook Name</label>
            <br></br>
            <input
              type="name"
              id="TBname"
              name="TBname"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <br></br>
            <label>Description</label>
            <br></br>
            <input
              type="description"
              id="description"
              name="TBdescription"
              value={descriptionvalue}
              onChange={(e) => setDValue(e.target.value)}
            ></input>
            <br></br>
            <button
              onClick={() => {
                // setTBname(value);
                FormClose();
              }}
            >
              {" "}
              Submit
            </button>
          </form>
          <button className="Close" onClick={() => FormClose()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
