//Styles
import './App.css';

//Data
import { wordsList } from './data/words'

//Hooks
import { useEffect, useState, useCallback } from 'react';

//Components
import Over from './components/Over';
import Play from './components/Play';
import Start from './components/Start';

//Create game stages
const stages = [
  {id: 0, name: 'start'},
  {id: 1, name: 'play'},
  {id: 2, name: "over"}]

let totalGuesses = 3

function App() {

  const [stage, setStage] = useState(stages[0].name);
  
  const [words] = useState(wordsList)
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(totalGuesses);
  const [score, setScore] = useState(0)
  
  const getCategoryAndWord = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {category, word}
  },[words]);

  //Defines start stage
  
  const gamePlay = useCallback(() => {
    
    clearLetterStates()

    const { category, word } = getCategoryAndWord()
    //console.log(guesses, score)
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((char) => char.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setStage(stages[1].name)

  }, [getCategoryAndWord]);

  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, 
        normalizedLetter,
      ]);

    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);

    }

  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {

    if(guesses <= 0){
      clearLetterStates()
      setStage(stages[2].name);
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]
    
    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      
      gamePlay()
    }
    
    console.log(uniqueLetters)
    
  }, [guessedLetters, letters, gamePlay])

  const gameRetry = () => {
    setScore(0)
    setGuesses(totalGuesses)
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
      {stage === 'over' && <Over gameRetry={gameRetry} score={score} />}
    </div>
  );
}

export default App;
