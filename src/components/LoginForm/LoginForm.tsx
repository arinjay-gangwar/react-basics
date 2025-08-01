import { useState, useEffect, useRef } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validateEmail = (value: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  const validatePassword = (value: string) => value.length >= 6;

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      if (email && !validateEmail(email)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }, 500);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [email]);

  useEffect(() => {
    if (password && !validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  }, [password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !emailError &&
      !passwordError &&
      validateEmail(email) &&
      validatePassword(password)
    ) {
      console.log("Email:", email);
      console.log("Password:", password);

      setSuccess(true);
      setEmail("");
      setPassword("");

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const isFormValid = validateEmail(email) && validatePassword(password);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate>
      <h2>Login</h2>
      <div className={styles["container"]}>
        <div className={styles["form-label"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="email-error"
            aria-invalid={!!emailError}
            required
          />
          {emailError && (
            <div
              id="email-error"
              className={styles["error"]}
              role="alert">
              {emailError}
            </div>
          )}
        </div>

        <div className={styles["form-label"]}>
          <label htmlFor="password">Password:</label>
          <div className={styles["password-wrapper"]}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password-error"
              aria-invalid={!!passwordError}
              required
            />
            <span
              className={styles["eye-icon"]}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              aria-label="Toggle password visibility">
              {showPassword ? (
                // Eye Slash SVG (Hide)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a20.08 20.08 0 0 1 4.23-5.91M6.12 6.12A9.97 9.97 0 0 1 12 4c7 0 10 8 10 8a20.14 20.14 0 0 1-4.22 5.92M1 1l22 22" />
                </svg>
              ) : (
                // Eye SVG (Show)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                  />
                </svg>
              )}
            </span>
          </div>
          {passwordError && (
            <div
              id="password-error"
              className={styles["error"]}
              role="alert">
              {passwordError}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={styles["btn"]}>
        Login
      </button>

      {success && <p className={styles.success}>✅ Login Successful!</p>}
    </form>
  );
};

export default LoginForm;
