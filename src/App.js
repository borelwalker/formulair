import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router,
Routes,
Route,
Link
 } from "react-router-dom";
 import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Telechargement from "./pages/Telechargement";



 const App= () => {
  return (
     <Router>
        <div>
          
        
          <nav>
          
            <Link to="/" activeClassName="nav-active">{Home}</Link>
          
            <Link to="/News" activeClassName="nav-active">{News}</Link>
            <Link to="/Contact" activeClassName="nav-active">{Contact}</Link>
            <Link to="/Service" activeClassName="nav-active">{Service}</Link>
            <Link to="/Telechargement" activeClassName="nav-active">{Telechargement}</Link>


        
          </nav>
       </div>
        <Routes>
          <Route path="/"         element={< Home />} />
          <Route path="/News"     element={ <News />} />
          <Route path="/Contact"  element={ <Contact />} />
          <Route path="/Service"  element={ <Service />} />
          <Route path="/Telechargement"  element={ <Telechargement/>} />
          <Route path="*"         element={< NotFound />} />
          
       </Routes>
     </Router>


  );
}

export default App;
