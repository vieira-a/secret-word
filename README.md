# Secret Word
Jogo criado durante o curso React.JS do Básico a Maestria, ministrado por Matheus Battisti.

## Como funciona
Foram criados 3 estágios para o jogo: **Start** (fase de apresentação do jogo) - **Game** (fase de carregamento e início do jogo) e **GameOver** (fase carregada ao finalizar o jogo).
Cada estágio é controlado pelo useState. 
No **App.js** foi criado um array com os estágios; também foi criado um useState para cada estado; de modo que cada estágio carrega o seu próprio componente:

### App.js

**Cria estágios do jogo**

```
const stages = [
    {id: 0, name: 'start'},
    {id: 1, name: 'play'},
    {id: 2, name: "over"}]
```

**Define estágio inicial**

`const [stage, setStage] = useState(stages[0].name);`

**Exibe componentes de acordo com o estágio do jogo**

```
return (
    <div className="App">
      {stage === 'start' && <Start/>}
      {stage === 'play' && <Play/>}
      {stage === 'over' && <Over/>}
    </div>
  );
```

**Alternando entre estágios**
Foram criadas 3 funções para alternar entre os estágios do jogo. Cada função altera o stage através do setStage, são passadas como prop para os componentes, e executadas através dos botões de cada componente; isso faz com que cada componente ative o próximo stage.

```
const gamePlay = () => {
    setStage(stages[1].name)
  }

  const gameOver = () => {
    setStage(stages[2].name)
  }

  const gameRetry = () => {
    setStage(stages[0].name)
  }
  ```

**Escolhendo palavras e categorias de palavras de forma aleatrória**
Os índices do objeto wordsList são as categorias. Foi criada uma função para escolher 1 dentre os índices.
Nota-se que para cada dado que se pretende manipular, são criadas variáveis com o useState.

**useState**
`const [category, setCategory] = useState("");`

**Função**
```
const getCategoryAndWord = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return [category, word]
  }
```

**words** é o nome do objeto wordsList importado
`const [words] = useState(wordsList)`

Após isso, a nova função é executada dentro da função **gamePlay**, inicializando 2 variáveis obtidas do seu retorno.

`const { category, word } = getCategoryAndWord()`

Após escolha da palavra, é necessário criar um array com cada letra que a compôe; além disso, o array foi normanlizado em letras minúsculas.

```
let wordLetters = word.split("")
    wordLetters = wordLetters.map((char) => char.toLowerCase()); 
```
Após a escolha da categoria e palavra, e tranformar cada letra da palavra num array de letras, basta *setar* os states:

`setPickedCategory(category);`
`setPickedWord(word);`
`setLetters(letters);`

Agora, o jogo é inciado com todos os seus estados definidos.

**Estruturando o componente **Play**
Para receber os states iniciados

- Passa os states por prop para o componente Play;
`{stage === 'start' && <Start gamePlay={gamePlay} pickedCategory={pickedCategory} pickedWord={pickedWord} letters={letters} />}`

- Recebe os props no componente Play:
`const Play = ({gameOver, pickedCategory, pickedWord, letters})`

Além desses, mais states foram criados para ser inicializados: letras acertadas, letras erradas, número de tentativas e pontuação. Todos também passados como prop.

```
const [guessedLetters, setGuessedLetters] = useState([]);
const [wrongLetters, setWrongLetters] = useState([]);
const [guesses, setGuesses] = useState(3);
const [score, setScore] = useState(0)
```

**Implementar nível de dificuldade**

```
let levelGame = 'easy'
let totalGuesses = 0

if(levelGame === 'easy') {
  totalGuesses = 10
} else if (levelGame === 'normal') {
  totalGuesses = 5
} else if (levelGame === 'hard') {
  totalGuesses = 3
}

console.log(totalGuesses)
```