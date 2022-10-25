import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(
  solution: string,
  name: string,
  status: string,
  plan: string,
  total: number,
  action: string,
) {
  return { solution, name, status, plan, total, action };
}

const rows = [
  createData('Salentia Elements', 'All Equities Portfolio', 'Active', 'Pay-as-you-go', 125.61, ' '),
  createData('SS&C Primatics', 'Investment Group A', 'Active', 'Subscription', 1000.00, ' '),
  createData('SS&C Risk and Compliance Reporting Tool', 'Investment Group B', 'Running', 'Subscription', 300.00, ' '),
  createData('SS&C Algorithmics Risk API', 'Desk A-US Equities', 'Running', 'Per Service', 279.36, ' '),
  createData('SS&C Algorithmics Managed Data Analytics Service', 'Investment Portfolio XYZ', 'Running', 'Pay-as-you-go', 128.64, ' '),
  createData('SS&C Sylvan Cloud Application', 'Investment Portfolio XYZ', 'User activated', 'Trial', 0.00, ' ')
]

export default function DenseTable() {
  return (
    <div> 
    <Typography variant='h1' color='primary' style={{marginLeft:'260px', marginTop:'30px', fontSize:'26px', fontWeight:'600'}}>Your Services at a Glance</Typography>
    <TableContainer component={Paper} style={{marginBottom: '20px', marginLeft:'260px', marginTop:'10px', maxWidth:1040, border:'none'}}>
     <div>
      <Table sx={{ maxWidth: 1040, borderBottom: '1px primary' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:'#0A85C7'}}>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Solution</TableCell>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Name</TableCell>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Status</TableCell>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Plan Type</TableCell>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="right">Monthly Total (est)</TableCell>
            <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          
              <TableCell align="left" style={{border:'0.1px solid #C0EBF8', maxWidth:'220px'}}>{row.solution}</TableCell>
              <TableCell align="left" style={{border:'0.1px solid #C0EBF8'}}>{row.name}</TableCell>
              <TableCell align="left" style={{border:'0.1px solid #C0EBF8'}}>{row.status}</TableCell>
              <TableCell align="left" style={{border:'0.1px solid #C0EBF8'}}>{row.plan}</TableCell>
              <TableCell align="right" style={{border:'0.1px solid #C0EBF8', fontWeight:'600'}}>{row.total}</TableCell>
              <TableCell align="center" style={{border:'0.1px solid #C0EBF8'}}>{row.action}{<AccountBalanceIcon color='primary' style={{marginRight:'10px', width:'20px', height:'20px'}}></AccountBalanceIcon>}{<LocalLibraryRoundedIcon color='primary' style={{marginRight:'10px', width:'20px', height:'20px'}}></LocalLibraryRoundedIcon>}{<HelpRoundedIcon color='primary' style={{marginRight:'10px', width:'20px', height:'20px'}}></HelpRoundedIcon>}{<DeleteIcon color='primary' style={{width:'20px', height:'20px'}}></DeleteIcon>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </TableContainer>
    </div>
  );
}