import React from 'react';

export default function Resume() {
  const resumeStyle = {
    textAlign: 'center',
    fontFamily: 'Arial',
  }
  const divStyle = {
    width: '50%',
    margin: 'auto'
  }
  return (
    <div>
      <h1 style={resumeStyle}>Resume</h1>
      <div style={divStyle}>
        <h2>Front end Proficiency</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JQuery</li>
          <li>Bulma CSS</li>
          <li>bootstrap</li>
          <li>Responsive Design</li>
          </ul>
    </div>
    <div style={divStyle}>
      <h2>Back End Proficiency</h2>
      <ul>
        <li>Heroku</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>GraphQl</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Rest</li>
        <li>MYSQL</li>
        <li>Sequilize</li>
      </ul>

      <div>
        <p>
          My Resume is available <a href='https://docs.google.com/document/d/1G2oti7-HAwONspT3iuF9FFnmx7cZs53SxecS5HJV1DA/edit?usp=sharing' target="_blank"rel="noreferrer" alt="resume">here</a>
        </p>
      </div>
    </div>
    </div>

    
  );
}
