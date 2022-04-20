import React, { useState, useEffect } from "react";
import "./caroussel.css";
import {dataProjects} from './../../assets/data/dataProjects'


export default function Caroussel({ selectedProject, setSelectedProject }) {
  const [classNameSlide, setClassNameSlide] = useState([
    "slide",
    "slide active",
    "slide last"
  ]);
 
  const [arrayProjects, setArrayProjects] = useState(dataProjects);
 

  useEffect(() => {
    const selProject = document.getElementById("featured");
    selProject &&
      selProject.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [selectedProject]);

  const slide = (direction) => {
    if (direction === "next") {
      const lastItem = arrayProjects[arrayProjects.length -1];
      const newArray = arrayProjects.slice(0,-1);
      console.log('newArray:',newArray, )
      setArrayProjects([lastItem, ...newArray])
      console.log('lastItem:', lastItem, 'arrayProjects', arrayProjects)
      // const swapArray = [
      //   classNameSlide[1],
      //   classNameSlide[2],
      //   classNameSlide[0]
      // ];

      // setClassNameSlide(swapArray);
      
    } else if (direction === "previous") {

      const firstItem = arrayProjects[0];
      const newArray = arrayProjects.slice(1);
      console.log('previous newArray:',newArray, )
      setArrayProjects([...newArray, firstItem])
      console.log('previous lastItem:', firstItem, 'arrayProjects', arrayProjects)      
      // const swapArray = [
      //   classNameSlide[2],
      //   classNameSlide[0],
      //   classNameSlide[1]
      // ];
      // setClassNameSlide(swapArray);
    }
     setClassNameSlide([]);
    let timeoutID;
    timeoutID = setTimeout(() => { 
      setClassNameSlide([
    "slide",
    "slide active",
    "slide last"
  ])
      clearTimeout(timeoutID);
    }, 10)
  };

 

  const chooseProject = (image) => {
    setSelectedProject(image);
  };

  return (
    <div id="caroussel">
      <h2>
        Mijn <strong>Projecten</strong>
      </h2>
<p>Klik op het project voor meer informatie</p>
      <div className="buttons">
        <button onClick={() => slide("previous")}>Vorige</button>
        <button onClick={() => slide("next")}>Volgende</button>
       
      </div>
      <div className="slider">
        {arrayProjects.map((image, index) => {
          
          return (
            <>
            {index <= 2 
            &&
            <div className={classNameSlide[index]} id={index} key={index}>
              <div
                className="projectname"
                onClick={() => chooseProject(image)}
              >
                <center>{image.title}</center> 
              </div>
              <img
                src={image.img}
                alt={image.title}
                onClick={() => chooseProject(image)}
              />
            </div>
            }
            </>
          );
        })}
      </div>
    </div>
  );
}
