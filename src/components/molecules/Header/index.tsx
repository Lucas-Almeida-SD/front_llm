import Select from "@/components/atoms/Select";
import { useLLMquestionContext } from "@/contexts/LLMquestion";
import { LLMs } from "@/utils/constants";

export default function Header() {
  const context = useLLMquestionContext();

  return(
    <header>
      { context && <Select dataList={LLMs} dispatch={context.setllmSelected}/> }
    </header>
  );
}