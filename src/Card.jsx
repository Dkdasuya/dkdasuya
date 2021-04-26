import react from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from '../src/Images/app.png'

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.content}
            </p>
            <a href={props.link} target="_blank" className="btn btn-outline-primary">
              Go to Code
            </a>         </div>
        </div>
      </div>
    </>
  );
};

export default Card;
