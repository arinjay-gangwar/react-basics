interface WelcomeProps {
  name?: string;
}

const Welcome = ({ name = "Guest" }: WelcomeProps) => (
  <section>
    <h2>Welcome, {name}</h2>
  </section>
);

export default Welcome;
