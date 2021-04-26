import react, { useDebugValue } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Sdata from './Sdata';

const Services = () => {
  return (
    <>
      <section id="projects">
      <div className="my-5">
        <h1 className="text-center">My Projects</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                  Sdata.map((value,index)=>{
                      return (<Card key={index} imgsrc ={value.imgsrc} title={value.title} content = {value.content} link={value.link}/>);
                  })
              }
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Services;
