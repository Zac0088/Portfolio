import React from 'react';
import profilepic from '../../Assets/profilepic.jpg'
import hero from '../../Assets/hero.png'
export default function Home() {
  const topTextStyles = {
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5',
  }
  const aboutMeStyles ={
    textAlign: 'center',
    fontSize: '20px',
    fontFamily: 'Arial',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5'

  }
  const profilePicStyles = {
    display: 'flex',
    justifyContent: 'center',
    width: "270px",
    height: "350px",
    borderBox: "1px",
    margin: 'auto'
  }
  const backgroundStyle ={
    backgroundImage: `url(${hero})`,
  }
 
  return (
    <div style={backgroundStyle}>
      <h1 style={topTextStyles}>About Me</h1>
      <div>
        <h2>
          <img src={profilepic} alt="selfie" style={profilePicStyles}/>
        </h2>
        <p style={aboutMeStyles}>I am a junior software engineer living in Melbourne Victoria studying Full Stack Web Development through Syndey University in sunny Austrtalia.
          I started this adventure as a fresh start for myself after having various jobs in the past and never really enjoying my work.
           After the very first class i was hooked on the endless possibilites that being a web developer offered me.
           In my Spare time i love  playing video games, photograpy and Basketball, i am also a 90s Hip Hop addict.
           Please look through the various applications I have worked on over my course work, but also watch this space as my journey continues outside of my current course and I Develop as a Full stack web Developer.
          Feel free to reach out to me im looking forward to hearing from you!!
          Regards 
          Zac Smart
        </p>
        
    </div>
      </div>
    
    
  );
}
