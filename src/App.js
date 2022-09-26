//Styles
import './App.css';

//Data
import { wordsList } from './data/words'

//Hooks
import { useState } from 'react';

//Components
import Over from './components/Over';
import Play from './components/Play';
import Start from './components/Start';

//Create game stages
const stages = [
  {id: 0, name: 'start'},
  {id: 1, name: 'play'},
  {id: 2, name: "over"}]

function App() {

  const [stage, setStage] = useState(stages[0].name);
  
  const [words] = useState(wordsList)
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0)
  
  const getCategoryAndWord = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  };

  //Defines start stage
  
  const gamePlay = () => {
    
    const { category, word } = getCategoryAndWord()
    //console.log(guesses, score)
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((char) => char.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setStage(stages[1].name)

  }

  const verifyLetter = (letter) => {
    console.log(letter)
  }

  const gameRetry = () => {
    setStage(stages[0].name)
  }


  return (
    <div className="App">
      {stage === 'start' && <Start gamePlay={gamePlay} />}
      {stage === 'play' && <Play verifyLetter={verifyLetter} 
      pickedCategory={pickedCategory} 
      pickedWord={pickedWord} 
      letters={letters} 
      guessedLetters={guessedLetters} 
      wrongLetters={wrongLetters} 
      guesses={guesses} 
      score={score} />}
      {stage === 'over' && <Over gameRetry={gameRetry}/>}
    </div>
  );
}

export default App;
