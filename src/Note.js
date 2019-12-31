import React from 'react';
import "./Note.css"
const Note = () => <div className="noteContainer">
  <div className="innerContainer">
  <img src="https://img.icons8.com/flat_round/64/000000/info.png" alt="info"></img>
  <h3>Note</h3>
  </div>
  <p>If your custom styling for the hamburger-icon doesn't seem to apply on the icon . Increase the specificity
    for the class-name by adding the parent class-name (.menu) as prefix. 
  </p>
</div>;

export default Note;