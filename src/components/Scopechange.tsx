import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
  
function formatOurData(columnName, desc, mname,sprint,us) {
  return { columnName, desc, mname, sprint,us };
}
  
const SampleData = [
  formatOurData("Before", "As a developer I want to integrate codiga code quality tool into Github CI CD", "Sprint-1","2022-03-28","2022-03-27"),
  formatOurData("Before", "As a developer I want to reserch on API gateway tools, so that I can find a mature process", "Sprint-1", "2022-03-28", "2022-03-27"),
  formatOurData("Before", "As a developer I want to visualize on Leadtime metric", "Sprint-1","2022-03-30","2022-03-27"),
];
  
export default function Scopechange() {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <TableContainer component={Paper}>
        <Table
          style={{
            width: 600,
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell>added_before_or_after_planning</TableCell>
              <TableCell align="right">
                  Description
              </TableCell>
              <TableCell align="right">
                  Milestone_name
              </TableCell>
              <TableCell align="right">
                  sprint_start_date
              </TableCell>
              <TableCell align="right">
                  Userstory_created_date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleData.map((row) => (
              <TableRow key={row.columnName}>
                <TableCell component="th" scope="row">
                  {row.columnName}
                </TableCell>
                <TableCell align="right">
                    {row.desc}
                </TableCell>
                <TableCell align="right">
                    {row.mname}
                </TableCell>
                <TableCell align="right">
                    {row.sprint}
                </TableCell>
                <TableCell align="right">
                    {row.us}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}