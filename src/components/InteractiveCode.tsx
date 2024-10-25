import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface InteractiveCodeProps {
  code: string;
}

const InteractiveCode: React.FC<InteractiveCodeProps> = ({ code }) => {
  return (
    <LiveProvider code={code}>
      <div className="interactive-code">
        <div className="code-editor">
          <LiveEditor />
        </div>
        <div className="code-preview">
          <LiveError />
          <LivePreview />
        </div>
      </div>
    </LiveProvider>
  );
};

export default InteractiveCode;
