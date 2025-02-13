
// import Header from "./components/Header";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Counter from "./Counter";  // Import Counter component
// import Page from "./components/Page";
// import "./components/Port.css";

// ========================================================================================
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header2 from "./Components2/Header2";
// import Counter from "./Components2/Counter";
// import  "./Components2/Counter.css";
// const App = () => {
//   return (
//     <Router>
//       <div>/..
//         <nav>
//           <ul>
//             <li><Link to="/header2">Header 2</Link></li>
//             <li><Link to="/counter">Counter</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/header2" element={<Header2 />} />
//           <Route path="/counter" element={<Counter />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// =======================================================
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./components3/asssstes/Assets/LoginSingup/LoginSingup";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup isSignup={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
