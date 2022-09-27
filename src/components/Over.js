import React from 'react'

const Over = ({gameRetry, score}) => {
  return (
    <div>
        <h1>Fim do jogo</h1>
        <p>A sua pontuação foi: {score}</p>
        <button onClick={gameRetry}>Iniciar novamente</button>
        </div>
  )
}

export default Over