import styles from "./UserCard.module.css";

interface UserCardProps {
  name: string;
  age: number;
  isPremium?: boolean;
}

const UserCard = ({ name, age, isPremium = false }: UserCardProps) => {
  const details = { Name: name, Age: age };

  return (
    <section className={styles["user-card"]}>
      {Object.entries(details).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <p>
        Status:{" "}
        <span
          className={`${isPremium ? styles["premium"] : styles["standard"]}`}>
          {isPremium ? "Premium User" : "Standard User"}
        </span>
      </p>
    </section>
  );
};

export default UserCard;
