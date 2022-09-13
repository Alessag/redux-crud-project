import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createClient, editClient } from "../featured/client/clientSlice";
import { Client } from "../types/client";

import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";

import { Form, Input } from "../styles";
const ClientForm = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.client);
  const { register, handleSubmit } = useForm<Client>();
  const [client, setClient] = React.useState<Client>({
    fiscalNumber: "",
    incomingDate: "",
    name: "",
    id: "",
  });

  React.useEffect(() => {
    if (params.id) {
      const client = clients.find((client) => client.id === params.id);
      if (client) {
        setClient(client);
      }
    }
  }, []);

  const onSubmit = (data: Client) => {
    if (params.id) {
      dispatch(editClient(client));
    } else {
      dispatch(createClient({ ...data, id: uuid() }));
    }
    navigate("/client");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleBackNavigation = () => {
    navigate(-1);
  };

  return (
    <Container>
      <h1>Client Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: !params.id,
          })}
          value={client.name}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          placeholder="Fiscal number"
          {...register("fiscalNumber", {
            required: !params.id,
          })}
          value={client.fiscalNumber}
          onChange={handleOnChange}
        />
        <Input
          type="date"
          placeholder="Incoming date"
          {...register("incomingDate", {
            required: !params.id,
          })}
          value={client.incomingDate}
          onChange={handleOnChange}
        />
        <Stack direction="column" spacing={2}>
          <Button variant="outlined" type="submit">
            {params.id ? "Update client" : "Create client"}
          </Button>
          <Button
            variant="outlined"
            type="submit"
            onClick={handleBackNavigation}
          >
            Go back
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default ClientForm;
