import * as React from 'react';
import SearchBar from './SearchBar';
import Technology from './Technology';
import YourServices from './YourServices';
import Catalog from './Catalog';
import Header from './Header';
import Tools from './Tools';
import MyServices from './MyServices';
import SecondCatalog from './SecondCatalog';

const Documentation: React.FC = () => {
  
    return (
        <>
        <SearchBar/>
        <Technology/>
        <YourServices/>
        <Catalog/>
        <Header/>
        <Tools/>
        <MyServices/>
        <SecondCatalog/>

        </>
          );
        };
      
 export default Documentation;