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
  
  //Defines start stage
  
  const gamePlay = () => {
    setStage(stages[1].name)
  }

  const gameOver = () => {
    setStage(stages[2].name)
  }

  const gameRetry = () => {
    setStage(stages[0].name)
  }

  const [words] = useState(wordsList)

  return (
    <div className="App">
      {stage === 'start' && <Start gamePlay={gamePlay} />}
      {stage === 'play' && <Play gameOver={gameOver} />}
      {stage === 'over' && <Over gameRetry={gameRetry}/>}
    </div>
  );
}

export default App;
