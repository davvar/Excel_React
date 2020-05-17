import React from 'react';
import './styles/App.scss';

import { hot } from 'react-hot-loader/root';
import DashboardPage from './pages/DashboardPage';
import ExcelPage from './pages/ExcelPage';

const App: React.FC = () => {
  return (
    <div className="App">
      {false ? <DashboardPage /> : <ExcelPage />}
    </div>
  );
}

export default hot(App);
