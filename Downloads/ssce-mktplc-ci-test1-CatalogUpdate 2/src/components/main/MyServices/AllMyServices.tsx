import MyServices from "./MyServices";
import MyServicesFooter from "./MyServicesFooter";
import OwnServices from "./OwnServices"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AllMyServices: React.FC = () => {
  return (
    <>
    {/* <MyServices/> */}
    <Router>
      <Routes>
      <Route path="/" element={<MyServices /> } />
       <Route path="/ownservices" element={<OwnServices />} />
           
       </Routes>
      </Router>
        {/* <OwnServices/>
        <MyServices/> */}
       {/* <MyServicesFooter/>*/}
     
   </>
  );
};

export default AllMyServices;
