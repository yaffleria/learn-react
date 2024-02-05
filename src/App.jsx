import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ChildComponent from "./components/ChildComponent";
import Img from "./assets/images/Untitled.avif";

import UserProfileWrapper from "./components/user-profile/UserProfilesWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UserProfileWrapper />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold bg-red-500 text-center">
        Hello CodeMarch
      </h1>
      <img src={Img} alt="avif" width="300" height="300" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChildComponent message="Walla!" />
    </>
  );
}

export default App;
