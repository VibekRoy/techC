import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './App';
import CreateArea from "./CreateArea";
import Login from "./Login";
import Register from "./Register";

function Appo(){
    return(
<Router>
      <Routes>
            <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
            <Route path="/Register" element={<Register />} />
        </Routes>
        <Routes>
            <Route path="/Home" element={<App />} />
        </Routes>
        <Routes>
            <Route path="/Admin" element={<CreateArea />} />
        </Routes>
        
      </Router>
    );}
export default Appo;
