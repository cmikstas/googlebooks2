import React from "react";
import "./style.css";

const LibrosGuardados = (props) =>
{
    return (
        <div className="row cardClass p-2 my-2">
            <div className="col-sm-2">
                <img className="img-fluid" alt={props.name} src={props.image} />
            </div>
            <div className="col-sm-10 bookInfo">
                <p><strong>Title:</strong> {props.title}</p>
                <p><strong>Authors:</strong> {props.authors}</p>
                <p><strong>Details:</strong> {props.description}</p>
                <p><strong>Link: </strong> <a href={props.infoLink}>{props.infoLink}</a></p>
                <button type="button" className="btn btn-warning" index={props.id} onClick={() => props.delete(props.id)}><strong>Delete Book</strong></button>
            </div>
        </div>
    );
}

export default LibrosGuardados;