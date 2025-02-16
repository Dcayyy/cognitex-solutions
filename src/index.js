// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/landing-page/LandingPage';
import 'antd/dist/reset.css'; // For Ant Design v5 (or use 'antd/dist/antd.css' for v4)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <LandingPage />
    </React.StrictMode>
);
