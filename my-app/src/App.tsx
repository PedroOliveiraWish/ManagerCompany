import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import LoginPage from './Page/login_page/login.page';
import CostumerPage from './Page/costumer_page/costumer.page';
import DirectorPage from './Page/director_page/director.page';
import ManagerPage from './Page/manager_page/manager.page';
import CoursePage from './Page/course_page/course.page';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/funcionario" element={<CostumerPage />} />
          <Route path="/diretor" element={<DirectorPage />} />
          <Route path="/gestor" element={<ManagerPage />} />
          <Route path="/curso/programacao" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
