// outputNode.js


import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || ''
  );
  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      badge="Output"
      variant="node-output"
      inputs={[{ id: 'value' }]}
    >
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          placeholder="Enter input name"
        />
      </label>

      <label>
        Type:
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};

