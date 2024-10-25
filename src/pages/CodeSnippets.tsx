import React from 'react';
import CodeSnippet from '../components/CodeSnippet';
import '../styles/CodeSnippets.css';

const CodeSnippets: React.FC = () => {
  const snippets = [
    {
      language: 'javascript',
      code: `const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greet('React Developer');`,
    },
    {
      language: 'jsx',
      code: `import React from 'react';

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    {children}
  </button>
);

export default Button;`,
    },
    {
      language: 'typescript',
      code: `interface User {
  name: string;
  age: number;
}

function isAdult(user: User): boolean {
  return user.age >= 18;
}`,
    },
  ];

  return (
    <div className="code-snippets">
      <h1>Code Snippets</h1>
      {snippets.map((snippet, index) => (
        <CodeSnippet
          key={index}
          language={snippet.language}
          code={snippet.code}
        />
      ))}
    </div>
  );
};

export default CodeSnippets;
