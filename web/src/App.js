import './App.css';
import Lottie from "lottie-react";
import blockAnimation from "./lottie/block.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottie animationData={blockAnimation} style={{width: "5rem", height:"5rem"}}/>
        <div className="Nav">
          <div className="Title">
            Kevin Kruger - Software Engineering
          </div>
          <div className="Menu">
          <a className="Frontend">UI/UX</a>&nbsp;|&nbsp;
            <a className="Backend">API</a>&nbsp;|&nbsp;
            <a className="Databases">Data</a>&nbsp;|&nbsp;
            <a className="Cloud">Cloud</a>&nbsp;|&nbsp;
            <a className="DevOps">DevOps</a>
          </div>
        </div>
      </header>
      <body className="App-body">
        TODO: reder merkdown
      </body>
    </div>
  );
}

export default App;
