// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import Knight from "./components/Knight";

export default function App(): React.JSX.Element {
  return (
    <div className="App">
        <Knight />
    </div>
  )
}
