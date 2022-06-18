import './App.css';
import Mensaje from './mensaje'


const App = () => {
  return (
    <div className="App">
      <h1>Titulo de la app</h1>
      <Mensaje message = 'estamos trabajando en un curso de react'/>
    </div>
  );
}

export default App;