import { useState } from 'react';
import Header from './components/Header';
import CardArea from './components/CardArea';
import './styles/App.css';

const cardImages = [
  { img: "/images/Bulbasaur.png", name:"Bulbasaur" },
  { img: "/images/Charmander.png", name:"Charmander" },
  { img: "/images/Clefairy.png", name:"Clefairy" },
  { img: "/images/Flareon.png", name:"Flareon" },
  { img: "/images/Jolteon.png", name:"Jolteon" },
  { img: "/images/Magikarp.png", name:"Magikarp" },
  { img: "/images/Pikachu.png", name:"Pikachu" },
  { img: "/images/Psyduck.png", name:"Psyduck" },
  { img: "/images/Slowpoke.png", name:"Slowpoke" },
  { img: "/images/Squirtle.png", name:"Squirtle" },
  { img: "/images/Staryu.png", name:"Staryu" },
  { img: "/images/Vaporeon.png", name:"Vaporeon" }
];

function App() {
  const [cardList, setCardList] = useState(cardImages);
  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;
  };

  const shuffleList = () => {
    setCardList(shuffle([...cardList]));
  };

  const flashBackgroundRed = () => {
    document.body.classList.add('gameOver');
    setTimeout(() => {
      document.body.classList.remove('gameOver');
    }, 500);
  };

  const cardClicked = (name) => {

    if (chosenCards.includes(name)) {
      // Game Over: Card in chosen!
      flashBackgroundRed();
      shuffleList();
      // Reset Scores.
      setScore(0);
      setChosenCards([]);

    } else {
      // Increment Score, add item, and shuffle!
      let newScore = score + 1;
      setChosenCards(prevChosen => [...prevChosen, name]);
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      shuffleList();

      // Check for 12 points win condition.
      // Display win message and reset game.
      if (newScore >= 12) {
        window.alert("CONGRATULATIONS! YOU WIN!!!");
        setScore(0);
        setChosenCards([]);
      }
    }

  };

  return (
    <div className="appContainer">
      <Header score={score} bestScore={bestScore} />
      <CardArea cardList={cardList} cardClicked={cardClicked} />
    </div>
  )
}

export default App
