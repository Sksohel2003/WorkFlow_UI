// toolbar.js

import { DraggableNode } from './draggableNode';
import './toolbar.css';


export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-section">
                <DraggableNode type="customInput" label="Input" icon="📥" />
                <DraggableNode type="llm" label="LLM" icon="🤖" />
                <DraggableNode type="customOutput" label="Output" icon="📤" />
                <DraggableNode type="text" label="Text" icon="✍️" />

                <DraggableNode type="math" label="Math" icon="🔢" />
                <DraggableNode type="condition" label="Condition" icon="🔀" />
                <DraggableNode type="delay" label="Delay" icon="⏱️" />
                <DraggableNode type="api" label="API" icon="🌐" />
                <DraggableNode type="logger" label="Logger" icon="📝" />
            </div>
            <div className="toolbar-right">
                <button className="toolbar-action">Help</button>
                <button className="toolbar-action">Profile</button>
                <button className="toolbar-action logout">Logout</button>
            </div>
        </div>
    );
};
