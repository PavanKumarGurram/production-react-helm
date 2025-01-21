import React, { useState } from 'react';
import { animations } from './animations';
import './App.css';

export function App() {
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const handleClick = () => {
    let nextAnimation;
    do {
      nextAnimation = Math.floor(Math.random() * animations.length);
    } while (nextAnimation === currentAnimation);
    setCurrentAnimation(nextAnimation);
  };

  return (
    <div 
      className="illusion-container"
      onClick={handleClick}
      style={{
        ...animations[currentAnimation].styles,
        cursor: 'pointer'
      }}
    />
  );
}

export default App;