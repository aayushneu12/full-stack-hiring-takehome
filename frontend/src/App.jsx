import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyList from './pages/CompanyList';
import CompanyDetails from './pages/CompanyDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CompanyList} />
        <Route path="/company/:id" component={CompanyDetails} />
      </Routes>
    </Router>
  );
}

export default App;
