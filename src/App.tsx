import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard/UserCard";
import Counter from "./components/Counter/Counter";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

const App = () => {
  const handleCounterChange = (value: number) => {
    console.log("Counter Updated", value);
  };

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
      <Counter
        initialValue={0}
        onChange={handleCounterChange}
      />
      <Counter
        initialValue={10}
        onChange={handleCounterChange}
        step={10}
      />
      {/* LoginForm Component */}
      <LoginForm />
    </>
  );
};

export default App;
