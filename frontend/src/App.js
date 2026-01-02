import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { LLMNode } from './nodes/llmNode';
import { TextNode } from './nodes/textNode';
import { MathNode } from './nodes/mathNode';
import { ConditionNode } from './nodes/conditionNode';
import { DelayNode } from './nodes/delayNode';
import { APINode } from './nodes/apiNode';
import { LoggerNode } from './nodes/loggerNode';

const nodeTypes = {
  input: InputNode,
  output: OutputNode,
  llm: LLMNode,
  text: TextNode,
  math: MathNode,
  condition: ConditionNode,
  delay: DelayNode,
  api: APINode,
  logger: LoggerNode,
};

function App() {
  return (
    <div classsName="app-root">
      <PipelineToolbar />
      <PipelineUI nodeTypes={nodeTypes} />
      <SubmitButton />
    </div>
  );
}

export default App;
