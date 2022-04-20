import React from 'react';
import coderjookPc from './../img/coderjook-pc.png';
import jookPc from './../img/jook-pc.png';
import romalPc from './../img/romal-pc.png';

export const dataProjects = [
  {
    img: romalPc,
    title: "romal kabelconfigurator",
    keyword: "romal",
    inhoud:"Naast de verkoop van producten, maakt Romal sinds 2009 klant specifieke kabel assemblies. Dit zijn coax, data, glasvezel of combinatiekabel-assemblies en worden in het kabelatelier vervaardigd en getest. De kabelconfigurator is een offerte systeem waarbij de vertegenwoordigers via een webapplicatie zelf een assemblie kunnen samenstellen en een offerte kunnen aanmaken. Alle gegevens die nodig zijn voor de kabelconfigurator worden via API uit het ERP systeem opgehaald",
    techniek:"Framework: React ^ Opmaak: html / bootstrap ^ connectie: API connectie axios ^ React: useContext, React Router",
    github:"",
    website:""
  },
  {
    img: coderjookPc,
    title: "scratch website",
    keyword: "coderjook",
    inhoud:"Als trainer in digitale geletterheid heb ik veel lesmateriaal gemaakt voor Scratch. Deze handleidingen en scripts heb ik gebundeld op een website en worden gebruikt in de Coderdojo Utrecht en in de bibliotheek Utrecht. * Deze website heb ik gemaakt om me te verdiepen in CRUD operations in een database. Hiervoor heb ik firebase gebruikt. Daarnaast heb ik login en beheer gedeelte gemaakt en de basisbeginselen geleerd van Typescript.",
    techniek:"Framework: React / Typescript ^ Opmaak: html/css flexbox ^ Opslag: Firebase storage en realtime database ^ React: useContext, React-Router-Dom",
    github:"https://github.com/coderjook/scratch-website.git",
    website:"https://scratch-tutorials.netlify.app/"
  },
  {
    img: jookPc,
    title: "jook.nl",
    keyword: "jook",
    inhoud:"Met de inhoud van deze website laat ik zien wie ik ben en waar mijn interesses liggen. * ik heb deze website gemaakt om me te verdiepen in css, positionering, responsive layout en css animaties en transitions.",
    techniek:"Framework: React ^ Opmaak: html / css - transition, animation ^ Componenten: slider, caroussel ^ React component: EmailJs",
    github:"https://github.com/coderjook/jook-website-vsc",
    website:"	https://jook.netlify.app/"
  },

];