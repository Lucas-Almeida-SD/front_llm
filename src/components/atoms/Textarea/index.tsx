import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export default function Textarea() {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement>  = ({ target }) => {
    setValue(target.value);
  }

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current as HTMLTextAreaElement;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [value])

  return(
    <textarea
      ref={textareaRef}
      className={styles.textarea_question}
      id="question-input"
      placeholder="Pergunte algo!"
      onChange={handleChange}
      value={value}
    />
  );
}