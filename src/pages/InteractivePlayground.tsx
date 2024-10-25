import React, { useState } from 'react';
import InteractiveCode from '../components/InteractiveCode';
import '../styles/InteractivePlayground.css';

type ExampleType = 'counter' | 'todoList';

const InteractivePlayground: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<ExampleType>('counter');

  const examples: Record<ExampleType, string> = {
    counter: `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
    </div>
  );
}
`,
    todoList: `function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

`,
  };

  return (
    <div className="interactive-playground">
      <h1>Interactive Playground</h1>
      <div className="example-selector">
        <button onClick={() => setSelectedExample('counter')}>Counter Example</button>
        <button onClick={() => setSelectedExample('todoList')}>Todo List Example</button>
      </div>
      <InteractiveCode code={examples[selectedExample]} />
    </div>
  );
};

export default InteractivePlayground;
