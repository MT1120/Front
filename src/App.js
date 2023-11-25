
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import AddP from "./components/addP";
import CardP from "./components/cardP";
import Log from "./components/Log";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/addP" element={<AddP />} />
              <Route path="/cardP/:tipo_documento/:nro_documento" element={<CardP />} />
              <Route path="/Log" element={<Log />} />
              
              {/* <Route path="*" element={<NotFound />} />
              <Route path="/projects/:id" element={<Project />} /> */}

            </Routes>
          </div>

      </Router>
    
      
    
    </>
  );
}

export default App;
