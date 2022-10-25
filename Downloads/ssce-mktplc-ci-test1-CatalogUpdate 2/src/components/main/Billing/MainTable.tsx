import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import NewPieChart from './NewPieChart';
import { Typography } from '@mui/material';

function createData(
    solution: string,
    name: string,
    plan: string,
    payment: string,
    invoices: string,
  ) {
    return { solution, name, plan, payment, invoices};
  }
  
  const rows = [
    createData('Salentia Elements','All Equities Portfolio', 'Pay-as-you-go', 'Current Month: 239.05', '01/01/22   01/12/21'),
    createData('Blue Sky Administration', 'Investment Portfolio 123', 'Subscription', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C GlobeOp', 'Investment Portfolio ABC', 'Subscription', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C Primatics', 'Investment Group A', 'Subscription', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C Risk and Compliance Reporting', 'Investment Group B', 'Subscription', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C Algorithmics Risk API', 'Desk A -US Equities', 'Per service', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C Algorithmics Managed Data Analytics', 'Investment Portfolio XYZ', 'Pay-as-you-go', 'Current Month: 239.05', '01/01/22 01/12/21'),
    createData('SS&C Sylvan Cloud Application', 'Investment Portfolio XYZ', 'Trial', 'Current Month: 239.05', '01/01/22 01/12/21'),
  ]
  
  export default function DenseTable() {
    return (
      
      <div style={{}}>
        <Typography variant='h1' color='primary' style={{marginLeft:'260px', marginTop:'0px', fontSize:'26px', fontWeight:'600'}}>Account Summary</Typography>
   
      <TableContainer component={Paper} style={{marginBottom: '20px', maxWidth:700, marginLeft:'260px', marginTop:'20px', border:'none', float:'left'}}>
       <div>
        <Table sx={{ maxWidth: 800, borderBottom: '1px primary' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{backgroundColor:'#0A85C7'}}>
              <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Solution</TableCell>
              <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Name</TableCell>
              <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Plan Type</TableCell>
              <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="right">Payment</TableCell>
              <TableCell style={{color:"#FAFDFF", boxShadow: 'inset -1px 0px 0px #C0EBF8'}} align="left">Recent Invoices</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
            
                <TableCell align="left" style={{border:'0.1px solid #C0EBF8', maxWidth:'220px'}}>{row.solution}</TableCell>
                <TableCell align="left" style={{border:'0.1px solid #C0EBF8', color:'rgb(10, 133, 199)'}}>{row.name}</TableCell>
                <TableCell align="left" style={{border:'0.1px solid #C0EBF8'}}>{row.plan}</TableCell>
                <TableCell align="right" style={{border:'0.1px solid #C0EBF8'}}>{row.payment}</TableCell>
                <TableCell align="right" style={{border:'0.1px solid #C0EBF8', fontWeight:'600'}}>{row.invoices}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
     
      </TableContainer>
      <div style={{float:'right'}}>
      <Typography variant='h1' color='black' style={{marginLeft:'0px', marginTop:'30px', fontSize:'24px', fontWeight:'600'}}>Billing Cost (last 6 months)</Typography>
      <Chart/>
      <Typography variant='h1' color='black' style={{marginLeft:'0px', marginTop:'30px', fontSize:'24px', fontWeight:'600'}}>Solution Breakdown</Typography>
      <NewPieChart/>
      </div>
      
      </div>
    );
  }