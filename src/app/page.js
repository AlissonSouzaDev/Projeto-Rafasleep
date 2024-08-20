import styles from "./page.module.css";
import SimpleTabs from "./components/tabs";

export default function Home() {
  return (
    <main className={styles.main}>
      <SimpleTabs />
    </main>
  );
}
