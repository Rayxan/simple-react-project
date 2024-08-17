import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const name = "Ana"

  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <h1>Testando css</h1>
      <SayMyName name="Raylenda"/>
      <SayMyName name="Matheus"/>
      <SayMyName name={name}/>
      <Pessoa nome="RaylendaGamer" 
        idade="27" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"/>
        <Frase/>
    </div>
  );
}

export default App;
