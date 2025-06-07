import { IoSend } from "react-icons/io5";
import styles from './styles.module.scss';

export default function Button() {

  return(
      <button type="button" className={styles.send_btn}>{<IoSend className={styles.send_icon}/>}</button>
  );
}