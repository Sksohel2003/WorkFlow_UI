// llmnode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      badge="Model"
      variant="node-llm"
      inputs={[
        { id: 'system', top: '33%' },
        { id: 'prompt', top: '66%' },
      ]}
      outputs={[
        { id: 'response' },
      ]}
    >
      <div className="node-description">
        This is a LLM.
      </div>
    </BaseNode>
  );
};
