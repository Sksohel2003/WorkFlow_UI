// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
        `Number of Nodes: ${result.num_nodes}\n` +
        `Number of Edges: ${result.num_edges}\n` +
        `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      console.error(error);
      alert('Error submitting pipeline');
    }
  };

  return (
    <div className="submit-container">
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

