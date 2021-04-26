import react, { useDebugValue } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Sdata from './Sdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava,faJs,faPython,faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import MySqlIcon from '../src/Images/mysql.png';


const Skills = () => {
  return (
    <>
      <section id="skills">
      <div className="my-5">
        <h1 className="text-center">My Skills</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          
            <div className="skills row gy-4">
            <FontAwesomeIcon icon={faJava} size="9x"/>
            <FontAwesomeIcon icon={faJs} size="9x"/>
            <FontAwesomeIcon icon={faPython} size="9x"/>
            <FontAwesomeIcon icon={faDatabase} size="9x"/>
            <FontAwesomeIcon icon={faReact} size="9x"/>
            </div>
          </div>
        </div>
      </div>
      </section>

      
    </>
  );
};

export default Skills;
