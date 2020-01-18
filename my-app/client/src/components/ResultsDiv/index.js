import React from "react";
import "./style.css";

const ResultsDiv = ({children}) =>
{
    return (
        <div className="mx-2 my-2 resultsDiv">
            <h3 className="ml-2 mt-2">Results</h3>
            {children}
        </div>
    );
}

export default ResultsDiv;