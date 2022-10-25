
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DownloadPDF from '../../../assets/DownloadPDF.png';
import PDF from '../../../assets/PDF.png';

const AllInvoices: React.FC = () => {
  

    const Item = styled(Paper)(({ theme }) => ({
        
        ...theme.typography.body2,
        padding: theme.spacing(2),
       
        color: theme.palette.text.secondary,
      }));

    return(
            <>    
 <Box sx={{ width: '100%', marginLeft:'20px', marginBottom:'100px' }}>
        <Typography fontSize='34px' fontWeight={600} style={{color:"#0A85C7",marginBottom:'45px'}}>Recent Invoices</Typography>
      <Stack spacing={2}>
        <Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_12323.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>January 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'262px'}}></img>
        </Item>
        <Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_13455.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>February 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'257px'}}></img>
        </Item>
        <Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_16464.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>March 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'275px'}}></img>
        </Item>
        <Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_19676.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>April 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'288px'}}></img>
        </Item><Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_19789.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>May 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'291px'}}></img>
        </Item><Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_23567.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>June 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'287px'}}></img>
        </Item><Item style={{display:"flex", width:'1050px', border:'1px solid #CBD9E1', borderRadius:'4px 0px 0px 4px'}}>
          <img src={PDF} ></img>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'20px', marginRight:'300px'}}> Invoice_25689.pdf</Typography>
          <Typography fontSize='16px' fontWeight={400}>Date of invoice:</Typography>
          <Typography fontSize='16px' fontWeight={600} style={{marginLeft:'10px'}}>July 3rd 2022</Typography>
          <img src={DownloadPDF} style={{marginLeft:'292px'}}></img>
        </Item>
      </Stack>
    </Box>
    </>
    );
}
 export default AllInvoices;