import './Play.css'

import React, { useState, useRef } from 'react'

const Play = ({ verifyLetter, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, guesses, score }) => {
 
const [letter, setLetter] = useState('');
const letterInputRef = useRef(null)

const handleSubmit = (e) => {
  e.preventDefault()
  verifyLetter(letter)
  setLetter('')
  letterInputRef.current.focus()
  
}

  return (
    <div className='container'>
      
      <div className="usedLetters">
      {wrongLetters.map((letter, index) => (
        <span key={index}>{letter}, </span>
      ))}
      </div>

      <div className="secretWordPanel">
          {letters.map((letter, index) => 
          guessedLetters.includes(letter) ? (
        <span className='squares' key={index}>{letter}</span>
          ) : (
        <span className='squares' key={index}></span>
        )
        )}  
      </div>  
      
      <form onSubmit={handleSubmit}>
        <label><input type="text" name='letter' maxLength={1} required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/></label>
        <button type='submit'>Jogar</button>
      </form>

      <div className="info">

        <p>Dica: {pickedCategory}</p>
        <p>Tentativas restantes: {guesses}</p>
        <p>Pontuação: {score}</p>

      </div>
  
    </div>
  )
}

export default Play