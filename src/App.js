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
  
  const getCategoryAndWord = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  };

  //Defines start stage
  
  const gamePlay = () => {
    
    const { category, word } = getCategoryAndWord()
    
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((char) => char.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(letters);

    setStage(stages[1].name)
  }

  const gameOver = () => {
    setStage(stages[2].name)
  }

  const gameRetry = () => {
    setStage(stages[0].name)
  }


  return (
    <div className="App">
      {stage === 'start' && <Start gamePlay={gamePlay} />}
      {stage === 'play' && <Play gameOver={gameOver} />}
      {stage === 'over' && <Over gameRetry={gameRetry}/>}
    </div>
  );
}

export default App;
