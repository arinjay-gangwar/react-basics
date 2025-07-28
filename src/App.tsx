import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello React + TypeScript!</h1>
        <p>This is my first Vite-powered app.</p>
      </header>
      <Welcome name="Jacob" />
    </>
  );
}

export default App;
