import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ConceptsShowcase from './pages/ConceptsShowcase';
import CodeSnippets from './pages/CodeSnippets';
import InteractivePlayground from './pages/InteractivePlayground';
import PerformanceMetrics from './pages/PerformanceMetrics';
import About from './pages/About';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation onNavClick={() => {}} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/concepts" element={<ConceptsShowcase />} />
              <Route path="/snippets" element={<CodeSnippets />} />
              <Route path="/playground" element={<InteractivePlayground />} />
              <Route path="/performance" element={<PerformanceMetrics />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
