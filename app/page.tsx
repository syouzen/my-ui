import TestAccordion from "../components/test-accordion";
import TestDialog from "../components/test-dialog";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <TestDialog />
      <TestAccordion />
    </div>
  );
}
