import TestPopover from "../components/test-popover";
import TestAccordion from "../components/test-accordion";
import TestDialog from "../components/test-dialog";
import TestDropdown from "../components/test-dropdown";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <TestDialog />
      <TestAccordion />
      <TestPopover />
      <TestDropdown />
    </div>
  );
}
