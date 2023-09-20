import { Outlet } from 'react-router-dom';
import { PageHeader } from '../pageHeader/pageHeader';

import './layout.css';

export const Layout = () => {
  return (
    <div className="layoutContainer">
      <PageHeader headerText="text text text" />

      <Outlet />
    </div>
  );
};
