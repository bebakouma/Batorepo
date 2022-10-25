import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  name: string,
  firm: string,
  contact: string,
  action: string
 
) {
  return { name, firm, contact, action };
}

const rows = [
  createData('Geneva World Investor Portfolio Management', 'Stephen Rain; London, UK', 'Shawn Goldman, New York, USA', ' '), 
  createData('CARING Real Estate Accounting and Consolidation', 'Marshall Lighthouse; Toronto, Canada', 'Elliot GOulde, New York, USA', ' '), 
  createData('CORE-Sightline Datawarehouse & Visualization ', 'Gurdeep Barla; Toronto, Canada', 'Haydon Poillette, Chicago, USA', ' '), 
  createData('GlobeOp - Full Outsourcing Services', 'Carlos Fernandez; Madrid, Spain', 'Basil DaSilva, London, UK', ' '), 
  createData('GlobeOp - Shadow Outsourcing Services', 'Helen Spreng; Toronto, Canada', 'Eden Silverberg, Windsor, USA', ' '), 
  createData('Geneva World Investor Portfolio Management', 'Dianna LeMay; New York, USA', 'Shawn Goldman, New York, USA', ' '), 
  createData('Post-Trade Processing Asset Servicing & Trade Capture', 'Robert Wolman; Toronto, Canada', 'Bruce Lastman, New York, USA', ' '), 
]


export default function DenseTable() {
  return (
    <TableContainer component={Paper} style={{marginLeft:'200px', marginTop:'20px', marginBottom: '50px'}}>
     <div>
      <Table sx={{ maxWidth: 1370 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:'#0077c8'}}>
            <TableCell style={{color:"#fff"}} align="left">Service Name</TableCell>
            <TableCell style={{color:"#fff"}} align="left">My Firm's Contact</TableCell>
            <TableCell style={{color:"#fff"}} align="left">SS&C Contact</TableCell>
            <TableCell style={{color:"#fff"}} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>  
              <TableCell align="left">{row.firm}</TableCell>
              <TableCell align="left">{row.contact}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </TableContainer>
  );
}