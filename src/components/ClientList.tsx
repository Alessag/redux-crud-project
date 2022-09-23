import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteClient } from "../featured/client/clientSlice";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Container, Input } from "../styles";

const ClientList = () => {
  const clients = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();
  const [filteredClients, setFilteredClients] = React.useState(clients);

  React.useEffect(() => {
    setFilteredClients(clients);
  }, [clients]);

  const handleDelete = (id: string) => {
    dispatch(deleteClient(id));
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterClients = clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        client.fiscalNumber.includes(e.target.value)
      );
    });
    setFilteredClients(filterClients);
  };

  return (
    <Container>
      <h1>Client list</h1>
      <Stack spacing={2} direction="row">
        <Link to="/client/create">
          <Button variant="outlined">Create client</Button>
        </Link>
        <Link to="/">
          <Button variant="outlined">Home</Button>
        </Link>
      </Stack>

      <Input
        type="text"
        placeholder="Search by name or fiscal number"
        onChange={handleOnSearch}
      />

      {filteredClients.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Fiscal number</TableCell>
                <TableCell align="right">Incoming date</TableCell>
                <TableCell align="right">Options</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients.map((row) => (
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
                  <TableCell align="right">
                    <Link to={`/client/edit/${row.id}`}>
                      <Button variant="outlined" size="small">
                        Edit
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "No clients"
      )}
    </Container>
  );
};

export default ClientList;
