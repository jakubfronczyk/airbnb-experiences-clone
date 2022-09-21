import React from 'react';
// import JokeProps from './components/JokeProps.js';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import experience1 from './images/experience-1.png';
// import Props from './components/Props.js';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card
      img={experience1}
      status="SOLD OUT"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      />
    </div>
  );
}

export default App;
