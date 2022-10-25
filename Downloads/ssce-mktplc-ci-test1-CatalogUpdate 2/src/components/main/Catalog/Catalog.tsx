import * as React from 'react';
import ExploreCatalog from './ExploreCatalog';
import InvestmentPort from './InvestmentPort'
import CatalogFooter from './CatalogFooter';
import UnownedServices from './UnownServices';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Catalog: React.FC = () => {
  
    return (
        <>

      <Router>
      <Routes>
      <Route path="/" element={<ExploreCatalog /> } />
       <Route path="/unownservices" element={<UnownedServices />} />   
       </Routes>
      </Router>
         {/* <UnownedServices/> */}
        {/* <Tabs/> */}
        {/* <ExploreCatalog /> */}
        {/* <InvestmentPort /> */}
        {/* <CatalogFooter /> */}
        </>
          );
        };
      

 export default Catalog;
