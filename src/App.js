
import './App.css';

function App() {
  return (
    <div className="App">
      {/*a tag de comentario mais estranha que existe*/}
      {/*inicio do componente de header*/}
      <header className='header' id='header'>
        <nav className='navigation'>
          <div className='logo'></div>{/*logo de image,*/}
          <ul>
            <li className='item-list'><a>Home</a></li>
            <li><a>Shapes</a></li>
            <li><a>Peças</a></li>
            <li><a>Contatos</a></li>
          </ul>
          <div></div>
        </nav>
      </header>{/*fim do cbecalho*/}
    </div>
  );
}

export default App;
