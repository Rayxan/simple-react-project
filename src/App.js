import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'raylenda'
  const updatedName = name.toUpperCase()

  function soma(a,b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Meu nome é {updatedName}</h1>
      <p>{soma(1,3)}</p>
      <img src={url} alt="Minha imagem"></img>
      <HelloWorld/>
    </div>
  );
}

export default App;
