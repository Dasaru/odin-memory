import { useState, useEffect } from 'react';
import Header from './components/Header';
import CardArea from './components/CardArea';
import './styles/App.css';

const defaultImage = "https://placehold.co/300x300";

const backupImages = [
  { img: defaultImage, name:"A" },
  { img: defaultImage, name:"B" },
  { img: defaultImage, name:"C" },
  { img: defaultImage, name:"D" },
  { img: defaultImage, name:"E" },
  { img: defaultImage, name:"F" },
  { img: defaultImage, name:"G" },
  { img: defaultImage, name:"H" },
  { img: defaultImage, name:"I" },
  { img: defaultImage, name:"J" },
  { img: defaultImage, name:"K" },
  { img: defaultImage, name:"L" }
];

function App() {
  const [cardList, setCardList] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    // API Call using pokeapi-js-wrapper
    setCardList(backupImages);
  }, []);

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
    // Game logic.
    console.log("Card " + name + " clicked!");

    if (chosenCards.includes(name)) {
      // Game Over: Card in chosen!
      flashBackgroundRed();
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
