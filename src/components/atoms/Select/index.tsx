import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

type Props = {
  dataList: string[],
  dispatch: Dispatch<SetStateAction<string>>
}

export default function Select(props : Props) {
  const { dataList, dispatch } = props;

  const handleChange: ChangeEventHandler<HTMLSelectElement> = ({ target }) => {
    dispatch(target.value)
  }

  return(
    <select onChange={handleChange} className={styles.select} name="llms">
      {dataList.map((llm) => <option key={llm} value={llm}>{llm}</option>)}
    </select>
  );
}