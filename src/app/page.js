import PopularMovies from "./components/movies";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PopularMovies />
    </main>
  );
}
