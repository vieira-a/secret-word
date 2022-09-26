import React from 'react'

const Over = ({gameRetry}) => {
  return (
    <div>
        <h1>Game over</h1>
        <button onClick={gameRetry}>Iniciar novamente</button>
        </div>
  )
}

export default Over