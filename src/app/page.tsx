import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../component/footer/Footer";
import EnhanceVisibility from "@/scenes/enhanceVisibility/EnhanceVisibilty";

export default function Home() {
  return (
    <main className={styles.main}>
      <Footer />
      <EnhanceVisibility />
    </main>
  );
}
