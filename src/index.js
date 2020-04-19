import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button, DatePicker, version } from "antd";
import Routes from './routes' //yarn add react-router react-apollo-client



const App = () => (
    <div className="App">
      <header className="App-header">
         <h>Login Page</h>
          <br></br>
         <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </header>
    </div>
  );



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


