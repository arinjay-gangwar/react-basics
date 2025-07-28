interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => (
  <section>
    <h2>Welcome, {name}</h2>
  </section>
);

export default Welcome;
