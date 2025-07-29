import Welcome from "./components/Welcome";
import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Hello React + TypeScript!</h1>
        <p>This is my first Vite-powered app.</p>
      </header>
      {/* Renders the given name value */}
      <Welcome name="Jacob" />
      {/* Renders Default value of Prop */}
      {/* <Welcome /> */}
    </>
  );
};

export default App;
