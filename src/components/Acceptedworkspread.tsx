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
  process_followed: string,
  userstories: string,
) {
  return { name, process_followed, userstories};
}

const rows = [
  createData('Achuth reddy Rajula', 'not divide and conquer', 'CFD, WIP, Leadtime microservice'),
  createData('Varshik Sonti', 'not divide and conquer', 'CycleTime, Throughput'),
  createData('Koustubha Kalvakolanu', 'not divide and conquer', 'WIP microservice, Leadtime microservice')
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Process followed</TableCell>
            <TableCell align="right">Userstories</TableCell>
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
              <TableCell align="right">{row.process_followed}</TableCell>
              <TableCell align="right">{row.userstories}</TableCell>
                      </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}