import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, DatePicker, version } from "antd";
import Routes from './routes' 

//get the client not Apollo but some other for express

const App = () => (
    <Routes />
  );



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


