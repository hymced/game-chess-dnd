// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);
const root = ReactDOMClient.createRoot(rootElement!);
root.render(<App />);
