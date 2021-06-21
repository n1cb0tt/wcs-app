import './reset.css';
import './App.css';
import Argonautes from "./components/Argonautes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>
              <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
              Les Argonautes
          </h1>
      </header>
        <main>

            <Argonautes/>
        </main>
        <footer>
            <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        </footer>
    </div>
  );
}

export default App;
