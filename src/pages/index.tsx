import Form from "@/components/molecules/Form";
import Header from "@/components/molecules/Header";
import LoadingText from "@/components/molecules/LoadingText";
import { ProviderLLMquestion } from "@/contexts/LLMquestion";

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <ProviderLLMquestion>
      <div className={styles.home_page}>
        <Header />
        <LoadingText />
        <main className={styles.main_content}>
          <Form />
        </main>
      </div>
    </ProviderLLMquestion>
  );
}
