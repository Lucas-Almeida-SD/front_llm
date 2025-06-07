import Button from "@/components/atoms/Button";
import Textarea from "@/components/atoms/Textarea";

import styles from './styles.module.scss';

export default function Form() {
  return(
    <form className={styles.question_form}>
      <h2>Como posso ajudar?</h2>
      <div className={styles.form_question_content}>
        <Textarea />
        <Button />
      </div>
    </form>
  );
}