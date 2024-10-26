import React from 'react';
import ReactDOM from 'react-dom/client'; // dependencies
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// context provider - wrap entire App
// provides context to all of its children components
// dev tools when rendering a Link, it's just rendering an achor tag but it's intercepting the path that the anchor is sending you to and making sure it doesn't do that page refresh so that you can maintain your state 
import Home from "./pages/Home2"
import About from "./pages/About2"


function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav> 
                    <Link to="/about">About</Link>
                </nav>   
            </header>
            <Routes>
                <Route path="/" element={<Home />} />  
                <Route path="/about" element={<About />} />   
            </Routes>
        </BrowserRouter>
    )
}
  
ReactDOM.createRoot(document.getElementById('root'))
.render(<App />);  

// Route - part of your URL that specifies where on your website you are