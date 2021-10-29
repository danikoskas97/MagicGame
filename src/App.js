import { useState } from "react";
import "./App.css";

const cardsImages = [
  { "src": "/public/helmet-1.png" },
  { "src": "/public/shield-1.png" },
  { "src": "/public/ring-1.png" },
  { "src": "/public/potion-1.png" },
  {"src":"/public/sword-1.png"},
  {"src":"/public/scroll-1.png"},
];
function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  
  // shuffle cards
  const shuffleCards = () =>{ 
    const shuffledCards = [...cardsImages, ...cardsImages]
    .sort(()=> Math.random()-0.5)
    .map((card)=> ({ ...card, id:Math.random() }))
    setCards(shuffleCards)
    setTurns(0)

  }
  console.log(cards, turns)
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
