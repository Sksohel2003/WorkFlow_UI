// // textNode.js



import { useState, useRef, useEffect} from 'react';
import { BaseNode } from './BaseNode';
import { useUpdateNodeInternals } from 'reactflow';


const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const updateNodeInternals = useUpdateNodeInternals();

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  useEffect(() => {
    const matches = [...currText.matchAll(VARIABLE_REGEX)];
    const uniqueVars = Array.from(
      new Set(matches.map((m) => m[1]))
    );
    setVariables(uniqueVars);
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      badge="Input"
      inputs={variables.map((v) => ({ id: v }))}
      variant="node-text"
      outputs={[{ id: 'output' }]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Type text or use variable"
          className="text-node-textarea"
          rows={1}
        />
      </label>
    </BaseNode>
  );
};

