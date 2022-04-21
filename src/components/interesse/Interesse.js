import React, { useState, useEffect } from "react";
import ImageSlider from "../imageslider/ImageSlider";
import Bubbles from "../bubbles/Bubbles";
import "./interesse.css";
import world from './../../assets/img/world.png';
import Dots from './../dots/Dots';

export default function Interesse() {
  const [currentInteresse, setCurrentInteresse] = useState("");

  useEffect(() => {
    scroll();
  }, [currentInteresse]);

  const showInteresse = (int) => {
    setCurrentInteresse(int);
    scroll();
    console.log(int);
  };

  const scroll = () => {
    const selProject = document.getElementById(currentInteresse);
    selProject &&
      selProject.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <>
      <div id="interesse">
        <div className="div__text">
          <h2>
            Mijn <strong>Interesses</strong>
          </h2>
          <p>
            In mijn werk en vrije tijd vind ik het prachtig om op zoek te gaan naar mogelijke
            verbanden tussen mensen, dingen en gebeurtenissen om ze vervolgens te verbinden.
            Of dat nu systemen zijn om aan elkaar te koppelen voor gegevensuitwisseling, kindertekeningen zijn als basis voor
            een Scratch project, of dat het de zoektocht is naar de verbinding tussen lichaam
            en geest....alles beweegt constant in relatie tot elkaar. {" "}
            
          </p>
          <Dots />
        </div>
        <div className="div__text">
          <h3>Junior Developer React </h3>
          <p>
            Er is niets mooier dan een concept of een ingewikkeld bedrijfsproces
            uit te werken tot een bruikbare applicatie of feature. Ik zie het als uitdaging om de interactie tussen mens en media zo intuïtief mogelijk te laten verlopen.  
            Programmeren is voor mij een creatief proces waarbij je kunt ontwerpen, structureren,
            knutselen en creëren..{" "}
            <span
              onClick={() => showInteresse("caroussel")}
              className="leesmeer"
            >
              bekijk mijn projecten{" "}
            </span>
          </p>
          <h3>Trainer Digitale vaardigheden - Coderjook</h3>
          <p>
            In mijn vrije tijd help ik kinderen hun digitale vaardigheden op een
            creatieve manier in te zetten. Ik wil ze de enorme wereld van
            digitale mogelijkheden laten zien en deze verbinden aan hun tastbare
            wereld. Door te programmeren, leren kinderen hoe je zelf dingen kan bouwen en maken. Zo worden
            ze creatiever, leren ze verbanden leggen en kritisch nadenken.
            Hierdoor zie ik kinderen tot bloei komen en hun talenten
            ontwikkelen. Kids get Future Proof.
            <span onClick={() => showInteresse("kids")} className="leesmeer">
              lees meer{" "}
            </span>
          </p>
          <p>
            <h3>Bewustzijnsontwikkeling</h3>
            We leven in een individualistische samenleving, maar hoe goed kennen
            we onszelf nu eigenlijk? Met onze telefoon staan we de hele dag in
            verbinding met elkaar. Maar in de verbinding met onszelf zijn we vaak nog zoekende. 
           Juist door aandacht te besteden aan bewustzijnsontwikkeling sta je
            steviger in je schoenen in deze gedigitaliseerde samenleving en krijg
            grip op je wereld. Hoe kunnen we met inzet van media weer in contact komen met onszelf? 
            <span onClick={() => showInteresse("mission")} className="leesmeer">
              lees meer{" "}
            </span>
          </p>
        </div>
      </div>

      {currentInteresse === "kids" && (
        <div id="kids">
          <div className="div__text">
            <h2>
              Kids get <strong>Future Proof</strong>
            </h2>
            <p>
              Ik vind het geweldig om kinderen hun eigen spel te laten maken met het gratis visueel
              programma Scratch. Ik merk dat programmeren de creativiteit
              van kinderen aanwakkert. Door ze te laten werken met hun hoofd, hart en handen kunnen ze op hun eigen manier hun talent erin kwijt. De een door bijvoorbeeld het
              grafisch ontwerpen van een spel, of het uitdenken van een verhaallijn, de ander door de techniek erachter.
              En de kinderen zelf…die zijn vooral enorm enthousiast en trots op hun prestaties.
            </p>
          </div>
          <div className="div__img">
            <ImageSlider />
          </div>
        </div>
      )}

      {currentInteresse === "mission" && (
        <div id="mission">
          <Bubbles />
          <div className="div__img">
            <img src={world} alt="world" classname="img-world" />
            <span>Designed by starline / Freepik</span>
            
          </div>
          <div className="div__text">
            <h2>
              Krijg grip<strong> op je wereld</strong>
            </h2>
            <p>
              Mijn hartewens is een applicatie te ontwikkelen waarmee je contact
              maakt met jezelf. Een app waarmee je jezelf durft te bevragen en waarmee je ontdekt welke patronen en
              overtuigingen jou gevormd hebben.{" "}
            </p>
            <p>
              {" "}
              <strong>
                {" "}
                "We zien de dingen niet zoals ze zijn, maar zoals wij zijn."
                Anais Nin{" "}
              </strong>{" "}
            </p>
            <p>
              Als je weet waarmee je je identificeert en wie je in werkelijkheid
              bent, beweeg je je makkelijker en ben je minder kwetsbaar in deze
              wereld. Door jezelf uit je bubbel te halen, sta je meer open voor
              anderen en krijg je weer keuze om jouw pad te volgen.
            </p>
          </div>
        </div>
      )}
      
    </>
  );
}
