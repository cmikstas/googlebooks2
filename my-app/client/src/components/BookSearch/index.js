import React from "react";
import "./style.css";

const BookSearch = (props) => {
    return (
        <form>
            <div className="form-control border-dark">
                <label className="survey-info">Book Search</label>
                <input type="text" className="form-control mt-2" value={props.bookName} onChange={props.handleInputChange}
                    placeholder="Enter Search Term"></input>
                <button type="submit" className="btn btn-dark mt-2" id="bookSearch" onClick={props.searchBooks}>Search</button>
            </div>
        </form>
    );
}

export default BookSearch;