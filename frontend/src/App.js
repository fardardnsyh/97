// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormBuilder from './components/FormBuilder';
import AIFormGenerator from './components/AIFormGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/ai-form-generator" element={<AIFormGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
