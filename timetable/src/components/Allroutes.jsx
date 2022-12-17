import { Routes,Route } from "react-router-dom";
import Pricepage from "./Pricepage";
import Signuppage from "./Signuppage";
import Loginpage from "./Loginpage";
import Home from "./Home";
export default function Allroutes(){

    return (
        <Routes>
            <Route path="/pricepage" element={<Pricepage/>} />
            <Route path="/signuppage" element={<Signuppage/>} />
            <Route path="/loginpage" element={<Loginpage/>} />
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            <Route path="/" element={<Home/>} />
        </Routes>
    )
    
}