import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from './data.js'
// import JokeProps from './components/JokeProps.js';
// import Props from './components/Props.js';

function App() {

  const dataMap = data.map(data => {
    return (
      <Card
      id= {data.id}
      title= {data.title}
      description= {data.description}
      price= {data.price}
      coverImg= {data.coverImg}
      status= {data.status}
      rating= {data.rating}
      reviewCount= {data.reviewCount}
      location= {data.location}
      openSpots= {data.openSpots}
      />
    )
  })

  return (
    <div className="">
      <Navbar />
      <Hero />
      {dataMap}
    </div>
  );
}

export default App;
