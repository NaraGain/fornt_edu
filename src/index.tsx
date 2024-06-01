import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient()


const theme = localStorage.theme

const color = theme === "dark" ? "#27272a" : "#ffffff"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider
    theme={{
      components:{
        Dropdown : {
          colorBgElevated : color,
          colorText : theme == "dark" ? "#ffffff" : "#27272a"
        },
      }
    }}
    >
      <QueryClientProvider client={queryClient}>
        <App/>
        </QueryClientProvider>
    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
