import { Button, TextField } from "@mui/material";

import styles from './styles.module.scss';

export default function LoginForm() {
  return(
    <form action="" className={styles.login_form}>
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="Senha" variant="outlined" />
      <Button variant="contained">Entrar</Button>
    </form>
  );
}