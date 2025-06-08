import SelectItem from "@/components/atoms/SelectItem";
import { useLLMquestionContext } from "@/contexts/LLMquestion";
import { LLMs, TEAMS } from "@/utils/constants";

import styles from './styles.module.scss';

export default function Header() {
  const context = useLLMquestionContext();

  return(
    <header className={styles.header}>
      { context && (
        <>
          <SelectItem
            dataList={LLMs}
            value={context.llmSelected}
            label="LLM"
            dispatch={context.setllmSelected}
          />
          <SelectItem
            dataList={TEAMS}
            value={context.teamSelected}
            label="TEAM"
            dispatch={context.setTeamSelected}
          />
        </>
      )}
    </header>
  );
}