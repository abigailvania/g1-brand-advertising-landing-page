import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Footer />
    </main>
  );
}
