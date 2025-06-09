import { GiRobotGolem } from "react-icons/gi";

import styles from './styles.module.scss';

export default function PageHeader() {
  return(
    <header>
      <div className={styles.logo_section}>
        <GiRobotGolem className={styles.logo_icon} />
        <h1 className={styles.app_title}>AI Query Tool</h1>
      </div>
    </header>
  );
}