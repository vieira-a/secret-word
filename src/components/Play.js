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
    <div>

        <p>Letras utilizadas:  
          {wrongLetters.map((letter, index) => (
            <span key={index}>{letter}, </span>
          ))}
        </p>
        

        <div>
          {letters.map((letter, index) => 
          guessedLetters.includes(letter) ? (
            <span key={index}>
              {letter}
            </span>
          ) : (
            <span key={index}> X </span>
        )
        )}
        </div>

        <form onSubmit={handleSubmit}>
          <label><input type="text" name='letter' maxLength={1} required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/></label>
          <button type='submit'>Jogar</button>
        </form>

        <p>Dica: {pickedCategory}</p>
        <p>Tentativas restantes: {guesses}</p>
        <p>Pontuação: {score}</p>
    </div>
  )
}

export default Play