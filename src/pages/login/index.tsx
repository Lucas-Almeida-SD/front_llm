import LoginForm from "@/components/molecules/LoginForm";
import PageHeader from "@/components/molecules/PageHeader";

import styles from '@/styles/Login.module.scss';

export default function Login() {
  return(
    <section className={styles.login_page}>
      <PageHeader />
      <main className={styles.main_content}>
        <LoginForm />
      </main>
    </section>
  );
}