import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const name = "Ana"

  return (
    <div className="App">
      {/* <HelloWorld/> */}
      <SayMyName name="Raylenda"/>
      <SayMyName name="Matheus"/>
      <SayMyName name={name}/>
      <Pessoa nome="RaylendaGamer" 
        idade="27" 
        profissao="Programador" 
        foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
