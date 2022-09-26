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
  //Defines start stage
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordsList)
  console.log(words)

  return (
    <div className="App">
      {stage === 'start' && <Start/>}
      {stage === 'play' && <Play/>}
      {stage === 'over' && <Over/>}
    </div>
  );
}

export default App;
