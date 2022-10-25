import  Typography  from '@mui/material/Typography';
import Card from '@mui/material/Card';

const BillingSummary: React.FC = () => {

    return (
      <>

<Card style={{ display:'flex', alignItems: 'flex-start',marginTop:'50px', gap: '20px', flex:"100%", flexWrap:'wrap', boxShadow: "none"}} >
             
             <Card sx={{  width: '400px',height: '409px',border:'none', marginLeft:'35px',boxShadow:'none'  }}>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Subscribtion ID:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > 1231232-2323-2123232</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Directory:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Default Directory (admin@ssnc-email.com</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> My role:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Account admin</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Offer:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Pay-as-you-go</Typography>
             </Card> 
               
            <Card sx={{ width: '295px',height: '409px', border:"none", boxShadow:'none' }}>
            <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Offer ID:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > SSNCX-Sal-MRP-32323</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Subscription Name:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Subscription Name</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Status:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Active</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Secure Source:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > Not Available</Typography>
             
            </Card>
            <Card sx={{  width: '295px',height: '409px', border:"none", boxShadow:'none'  }}>
            <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Current Billing Period:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > 01/03/2022 - 09/03/2022</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Currency:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > USD</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Last Bill Amount:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > $123.45</Typography>
             <Typography fontSize='14px' fontWeight={400} style={{color:'#577687',marginBottom:'10px' }}> Current Bill Amount:</Typography>
             <Typography fontSize='16px' fontWeight={400} style={{color:'#02273C', marginBottom:'40px'}} > $234.5</Typography>
              
            </Card>
</Card>

</>
    );
  };
  
  export default BillingSummary;
  