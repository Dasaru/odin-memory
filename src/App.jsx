import { useState } from 'react';
import Header from './components/Header';
import CardArea from './components/CardArea';
import './styles/App.css';

const cardImages = [
  { img: "/src/assets/pokemon/Bulbasaur.png", name:"Bulbasaur" },
  { img: "/src/assets/pokemon/Charmander.png", name:"Charmander" },
  { img: "/src/assets/pokemon/Clefairy.png", name:"Clefairy" },
  { img: "/src/assets/pokemon/Flareon.png", name:"Flareon" },
  { img: "/src/assets/pokemon/Jolteon.png", name:"Jolteon" },
  { img: "/src/assets/pokemon/Magikarp.png", name:"Magikarp" },
  { img: "/src/assets/pokemon/Pikachu.png", name:"Pikachu" },
  { img: "/src/assets/pokemon/Psyduck.png", name:"Psyduck" },
  { img: "/src/assets/pokemon/Slowpoke.png", name:"Slowpoke" },
  { img: "/src/assets/pokemon/Squirtle.png", name:"Squirtle" },
  { img: "/src/assets/pokemon/Staryu.png", name:"Staryu" },
  { img: "/src/assets/pokemon/Vaporeon.png", name:"Vaporeon" }
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
