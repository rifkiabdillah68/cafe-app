import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={styles.login}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <input></input>
        </form>
      </div>
    </main>
  );
};

export default Login;
