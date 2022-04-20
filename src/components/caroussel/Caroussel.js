import React, { useState, useEffect } from "react";
import "./caroussel.css";
import { dataProjects } from "./../../assets/data/dataProjects";

export default function Caroussel({ selectedProject, setSelectedProject }) {
  const [classNameSlide, setClassNameSlide] = useState([
    "slide",
    "slide active",
    "slide last"
  ]);

  useEffect(() => {
    const selProject = document.getElementById("featured");
    selProject &&
      selProject.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [selectedProject]);

  const slide = (direction) => {
    if (direction === "next") {
      const swapArray = [
        classNameSlide[1],
        classNameSlide[2],
        classNameSlide[0]
      ];

      setClassNameSlide(swapArray);
    } else if (direction === "previous") {
      const swapArray = [
        classNameSlide[2],
        classNameSlide[0],
        classNameSlide[1]
      ];
      setClassNameSlide(swapArray);
    }
  };

  const chooseProject = (image) => {
    setSelectedProject(image);
  };

  return (
    <div id="caroussel">
      <h2>
        Mijn <strong>Projecten</strong>
      </h2>
      <p>Klik op de afbeelding voor meer informatie</p>

      <div className="buttons">
        <button onClick={() => slide("previous")}>Vorige</button>
        <button onClick={() => slide("next")}>Volgende</button>
      </div>
      <div className="slider">
        {dataProjects.map((image, index) => {
          return (
            <div className={classNameSlide[index]} id={index} key={index}>
              <div className="projectname" onClick={() => chooseProject(image)}>
                <center>{image.title}</center>
              </div>
              <img
                src={image.img}
                alt={image.title}
                onClick={() => chooseProject(image)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

