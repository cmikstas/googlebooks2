import React from "react";
import "./style.css";

const JumbotronDos = (props) => 
{
    return (
      <div>
        <h1>(React) Google Books Search</h1>
        <br></br>
        <h2>Review your saved books</h2>
        <br></br>
        <button type="button" className="btn btn-light" onClick={() => props.searchBooks()}>Search Books</button>
      </div>
    );
}

export default JumbotronDos;