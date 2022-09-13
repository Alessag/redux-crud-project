import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../app/hooks";
import { createClient } from "../featured/client/clientSlice";
import Container from "@mui/material/Container";

type Client = {
  name: string;
  fiscalNumber: string;
  incomingDate: Date;
};

const ClientForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Client>();

  const onSubmit = (data: Client) => {
    dispatch(createClient({ ...data, id: uuid() }));
    navigate("/client");
  };

  return (
    <Container>
      <h3>Client Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder="Fiscal number"
          {...register("fiscalNumber", {
            required: true,
          })}
        />
        <input
          type="date"
          placeholder="Incoming date"
          {...register("incomingDate", {
            required: true,
          })}
        />
        <Button variant="outlined" type="submit">
          Create client
        </Button>
      </form>
      <Link to="/">
        <Button variant="outlined">Home</Button>
      </Link>
    </Container>
  );
};

export default ClientForm;
