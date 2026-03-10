import { createUsePuck } from "@puckeditor/core";
import { styles } from "../styles";

const usePuck = createUsePuck();

export const AccessibilityChecker = () => {
  const data = usePuck((s) => s.appState.data);
  return <div className={styles.section}>Welcome puck-plugin-accessibility-checker</div>;
};
