import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteService } from "../featured/service/serviceSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Container, Input } from "../styles";

const ServiceList = () => {
  const services = useAppSelector((state) => state.service);
  const dispatch = useAppDispatch();
  const [filteredClients, setFilteredClients] = React.useState(services);

  React.useEffect(() => {
    setFilteredClients(services);
  }, [services]);

  const handleDelete = (id: string) => {
    dispatch(deleteService(id));
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterClients = services.filter((client) => {
      return client.id.includes(e.target.value);
    });
    setFilteredClients(filterClients);
  };

  return (
    <Container>
      <h1>Services list</h1>
      <Stack spacing={2} direction="row">
        <Link to="/service/create">
          <Button variant="outlined">Create service</Button>
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
                <TableCell>Title</TableCell>
                <TableCell align="right">Client id</TableCell>
                <TableCell align="right">Start date</TableCell>
                <TableCell align="right">End date</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Actions</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredClients.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.startDate}</TableCell>
                  <TableCell align="right">{row.endDate}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
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
        "No services"
      )}
    </Container>
  );
};

export default ServiceList;
