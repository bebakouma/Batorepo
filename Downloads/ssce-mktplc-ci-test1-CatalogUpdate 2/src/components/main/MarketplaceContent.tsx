import SnackbarDemo from '../notifications/SnackbarDemo';
import useNotifier from '../notifications/use-notifier';
import Header from './Header';
import NavRail from './NavRail/NavRail';
import AllMyServices from './MyServices/AllMyServices';
import DataServices from './DataServices/DataServices';
import { useSelector } from 'react-redux';
import { getCurrentNavRail } from '../../redux/snackbars/selectors';
import { TabType } from '../../redux/current-navrail/state';
import  Catalog  from './Catalog/Catalog';
import AllServices from './AllServices/AllServices';
import Documentation from './Documentation/Documentation';
import NodeRed from './NodeRed/NodeRed';
import Billing from './Billing/Billing';
import { Support } from '@mui/icons-material';
import { BrowserRouter , Router, Route, Routes } from "react-router-dom";

const MarketplaceContent: React.FC = () => {
  useNotifier();
  const currentNavRail = useSelector(getCurrentNavRail);

  return (
    <>
      <Header isOpen={true} />
      <NavRail />
     
      
      <div style={{ marginLeft: '65px', marginTop: '64px' }}>
          <SnackbarDemo /> 
      </div>

      {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={ <AllServices/> } >
       <Route path="myservices" element={<AllMyServices/>} />   
       <Route path="catalog" element={currentNavRail === TabType.CATALOG && <Catalog/>} /> 
       <Route path="billing" element={currentNavRail === TabType.BILLING && <Billing/>} /> 
       <Route path="documentation" element={currentNavRail === TabType.DOCUMENTATION && <Documentation/>} />
       <Route path="dataservices" element={currentNavRail === TabType.DATASERVICES && <DataServices/>} />
       <Route path="nodered" element={currentNavRail === TabType.NODERED && <NodeRed/>} />
       </Route>
       </Routes>
      </BrowserRouter> */}

      {currentNavRail === TabType.SERVICES && <AllServices/>}
      {currentNavRail === TabType.MY_SERVICES && <AllMyServices/>}
      {currentNavRail === TabType.CATALOG && <Catalog/>}
      {currentNavRail === TabType.BILLING && <Billing/>}
      {currentNavRail === TabType.DOCUMENTATION && <Documentation/>}
      {currentNavRail === TabType.DATASERVICES && <DataServices/>}
      {currentNavRail === TabType.NODERED && <NodeRed/>}
      {currentNavRail === TabType.SUPPORT && <Support/>}
   </>
  );
};

export default MarketplaceContent;
