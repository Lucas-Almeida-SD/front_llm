import Form from "@/components/molecules/Form";
import Header from "@/components/molecules/Header";
import { ProviderLLMquestion } from "@/contexts/LLMquestion";

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <ProviderLLMquestion>
      <div className={styles.home_page}>
        <Header />
        <main className={styles.main_content}>
          <Form />
        </main>
      </div>
    </ProviderLLMquestion>
  );
}
