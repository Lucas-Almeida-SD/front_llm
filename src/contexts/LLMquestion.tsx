import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import { LLMs, TEAMS } from "@/utils/constants";

type LLMquestionContextType = {
  llmSelected: string,
  setllmSelected: Dispatch<SetStateAction<string>>,
  teamSelected: string,
  setTeamSelected: Dispatch<SetStateAction<string>>,
  question: string,
  setQuestion: Dispatch<SetStateAction<string>>,
  questionSent: boolean,
  setQuestionSent: Dispatch<SetStateAction<boolean>>,
}

export const LLMquestionContext = createContext<LLMquestionContextType | undefined>(undefined);

export function ProviderLLMquestion({ children }: { children: ReactElement }) {
  const [llmSelected, setllmSelected] = useState(LLMs[0]);
  const [teamSelected, setTeamSelected] = useState(TEAMS[0]);
  const [question, setQuestion] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  const data = {
    llmSelected, setllmSelected,
    question, setQuestion,
    questionSent, setQuestionSent,
    teamSelected, setTeamSelected,
  }

  return(
    <LLMquestionContext.Provider value={data}>
      {children}
    </LLMquestionContext.Provider>
  )
}

export const useLLMquestionContext = () => useContext(LLMquestionContext);