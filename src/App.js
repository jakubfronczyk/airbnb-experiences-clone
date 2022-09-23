import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js'


function App() {

  const cards = data.map(data => {
    return (
      <Card
      key= {data.id}
      {...data}
      />
    )
  })

  return (
    <div className="">
      <Navbar />
      <Hero />
      <section className="card-section">
        {cards}
      </section>
    </div>
  );
}

export default App;
