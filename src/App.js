import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css'
import HeaderComponent from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import FooterComponent from './components/footer/Footer';

function App() {
  return (
    <Layout style={{ height: '100%' }}>
      <HeaderComponent />
      <Dashboard />
      <FooterComponent />
    </Layout>
  );
}

export default App;
