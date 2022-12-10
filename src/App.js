import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GRU from "./pages/GRU";
import Contactus from "./pages/Contactus";
import IAD from "./pages/IAD";
import Signout from "./pages/Signout";
import Seattle from "./pages/Seattle";
import Proserve from "./pages/Proserve";
import Denver from "./pages/Cohorts";
import WWPS from "./pages/WWPS";
import WWBDSI from "./pages/WWBDSI";
import WWCO from "./pages/WWCO";
import WWCS from "./pages/WWCS";
import WWSO from "./pages/WWSO";
import AWSDataLab from "./pages/AWSDataLab";
import Uploader from "./pages/UploadFile";


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/signout" element={<signOut/>}></Route>
          <Route path="/iad" element={<IAD/>}></Route>
          <Route path="/proserve" element={<Proserve/>}></Route>
          <Route path="/seattle" element={<Seattle/>}></Route>
          <Route path="/gru" element={<GRU/>}></Route>
          <Route path="/denver" element={<Denver/>}></Route>
          <Route path="/wwps" element={<WWPS/>}></Route>
          <Route path="/wwso" element={<WWSO/>}></Route>
          <Route path="/wwcs" element={<WWCS/>}></Route>
          <Route path="/wwbdsi" element={<WWBDSI/>}></Route>
          <Route path="/awsdatalab" element={<AWSDataLab/>}></Route>
          <Route path="/wwco" element={<WWCO/>}></Route>
          <Route path="/uploadfile" element={<Uploader/>}></Route>
        </Routes>
        
    </>
  );
}
export default App;
