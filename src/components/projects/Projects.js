import React, { useEffect,useState} from "react";
import "./projects.css";

export default function Projects({ selectedProject }) {
  
  const [paragraafTag, setParagraafTag] = useState([]);
  const [breakTag, setBreakTag] = useState([]);
  const [showElement, setShowElement] = useState("")
 
 
  const { img, title, keyword, inhoud, techniek, github, website } = selectedProject;


  
  useEffect(()=>{
    //inhoud <p>
    if (selectedProject.inhoud) {
        setParagraafTag(inhoud.split("*"));
    }
    // website technieken <br/>
    if (selectedProject.techniek) {
        setBreakTag(techniek.split("^"));
    }
    // laat animatie show zien op #featured
    setShowElement("show")
    let timeoutID;
    timeoutID = setTimeout(() => { 
      setShowElement("")
      clearTimeout(timeoutID);
    }, 3000)
  },[selectedProject])

  
  return (
    <>

      {keyword && (
        <div id="featured" className={showElement}>
          <div className="div__text">
            <h2>{title}</h2>
            <h3>Inhoud</h3>
            {paragraafTag.map((inhoud)=> {return (
                <p>{inhoud}</p>
            )})}
                        
            <h3 id={keyword}>Technieken website</h3>
            <p>
              { breakTag.map((techniek)=> {return (
                <>
                {techniek}<br/>
                </>
              )})}           
            </p>
            <div className="buttons">
              {website && 
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  website
                </a>
              } 
              {github &&
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
              }
            </div>
          </div>
          <div className="div__img">
            <img src={img} alt={keyword} />
          </div>
        </div>
      )}

    </>
  );
}
