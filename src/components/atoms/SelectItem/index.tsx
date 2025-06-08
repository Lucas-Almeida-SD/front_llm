import { Dispatch, SetStateAction } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import styles from './styles.module.scss';

type Props = {
  dataList: string[],
  value: string,
  label: string,
  dispatch: Dispatch<SetStateAction<string>>
}

export default function SelectItem(props : Props) {
  const { dataList, value, label, dispatch } = props;

  return(
    <>
      <FormControl fullWidth className={styles.form_select_item}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(event) => dispatch(event.target.value)}
          label={label}
          inputProps={{ 'aria-label': 'Without label' }}
          className={styles.select_item}
        >
          {dataList.map((llm) => <MenuItem key={llm} value={llm}>{llm}</MenuItem>)}
        </Select>
      </FormControl>
    </>
  );
}