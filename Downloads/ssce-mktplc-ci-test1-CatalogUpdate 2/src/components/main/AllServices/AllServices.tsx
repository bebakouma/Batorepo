import RelatedServices from "../RelatedServices/RelatedServices";
import Services from "../Services/Services";
import MainTable from "../MainTable/MainTable";
import MyServicesFooter from "../MyServices/MyServicesFooter";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const AllServices: React.FC = () => {
  return (
    <>
        <div style={{marginLeft: '260px', marginTop:'-50px'}} role="presentation" onClick={handleClick}>
           <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="primary" href="/" fontWeight={900}>
              Dashboard
            </Link>
          </Breadcrumbs>
        </div>
        <Services/>
        <MainTable/>
     { /*  <RelatedServices/>
        <MyServicesFooter/>*/}
   </>
  );
};

export default AllServices;
