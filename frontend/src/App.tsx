import { useState } from "react";
import "./App.css";

import NavbarComponent from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column">
      <header>
        <NavbarComponent />
      </header>
      <main>
        <CardComponent />
      </main>
      <footer>
        <div>All right reserved</div>
      </footer>
    </div>
  );
}

export default App;

/*
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>  
 */
