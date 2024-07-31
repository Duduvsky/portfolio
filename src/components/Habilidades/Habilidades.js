import React from 'react';
import './styles.css';

const Habilidades = () => {
  return (
    <section className="habilidades" id='habilidades'>
      <h2>My Skills</h2>
      <div className="card-container">
        <div className="card">
          <h3>Front-End</h3>
          <ul className="habilidades-list">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Angular Material</li>
          </ul>
        </div>
        <div className="card">
          <h3>Back-End</h3>
          <ul className="habilidades-list">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>MySQL</li>
            <li>Swagger</li>
          </ul>
        </div>
        <div className="card">
          <h3>Outras</h3>
          <ul className="habilidades-list">
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>APIs</li>
            <li>Design Responsivo</li>
            <li>Figma</li>
            <li>Metodologias Ágeis (Scrum)</li>
            <li>Analista QA</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
