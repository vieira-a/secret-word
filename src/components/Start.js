const Start = ({gamePlay}) => {
  return (
    <div>
        <h2>Secret Word</h2>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={gamePlay}>Jogar</button>
    </div>
  )
}

export default Start