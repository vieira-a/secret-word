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

