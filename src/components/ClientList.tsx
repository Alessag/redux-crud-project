import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { deleteClient } from "../featured/client/clientSlice";

const ClientList = () => {
  const clients = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteClient(id));
  };

  return (
    <div>
      <h3>ClientList</h3>
      <Stack spacing={2} direction="row">
        <Link to="/client/create">
          <Button variant="outlined">Create client</Button>
        </Link>
        <Link to="/">
          <Button variant="outlined">Home</Button>
        </Link>
      </Stack>

      {clients.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Fiscal number</TableCell>
                <TableCell align="right">Incoming date</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.fiscalNumber}</TableCell>
                  <TableCell align="right">{row.incomingDate}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => {
                        handleDelete(row.id);
                      }}
                      variant="outlined"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "No clients"
      )}
    </div>
  );
};

export default ClientList;
