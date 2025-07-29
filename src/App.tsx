import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard/UserCard";
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
      {/* UserCard */}
      <UserCard
        name="Alice"
        age={28}
        isPremium={true}
      />
      <UserCard
        name="Bob"
        age={35}
      />
    </>
  );
};

export default App;
