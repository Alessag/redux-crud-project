import React from "react";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createClient, editClient } from "../featured/client/clientSlice";
import Container from "@mui/material/Container";
import { Form, Input } from "../styles";

type Client = {
  fiscalNumber: string;
  id?: string;
  incomingDate: string;
  name: string;
};

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

  return (
    <Container>
      <h2>Client Form</h2>
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
        <Button variant="outlined" type="submit">
          {params.id ? "Update client" : "Create client"}
        </Button>
      </Form>
    </Container>
  );
};

export default ClientForm;
