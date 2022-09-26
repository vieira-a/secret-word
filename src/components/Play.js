import React from 'react'

const Play = ({gameOver}) => {
  return (
    <div>
        <h1>Gameplay</h1>
        <button onClick={gameOver}>Finalizar jogo</button>
    </div>
  )
}

export default Play