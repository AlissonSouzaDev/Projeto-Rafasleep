import Image from "next/image";
import styles from "./page.module.css";
import SimpleTabs from "./components/tabs";
import SimpleTable from "./components/table";

export default function Home() {
  return (
    <main className={styles.main}>
      <SimpleTabs />
    </main>
  );
}
