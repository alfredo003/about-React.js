import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Contact from './page/Contact.jsx';
function App(){
  return(
    <div>
      <BrowserRouter> 
      <Routes>
       <Route path="/" element={ <Home/> }/>  
       <Route path="/contact" element={ <Contact/> }/>  
      </Routes>
      </BrowserRouter>
    
    </div>
  ) 
}
export default App;