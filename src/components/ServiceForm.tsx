import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createService, editService } from "../featured/service/serviceSlice";
import { Service } from "../types/service";

import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";

import { Form, Input } from "../styles";
const ServiceForm = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clients = useAppSelector((state) => state.service);
  const { register, handleSubmit } = useForm<Service>();
  const [service, setService] = React.useState<Service>({
    title: "",
    id: "",
    startDate: "",
    endDate: "",
    price: 0,
  });

  React.useEffect(() => {
    if (params.id) {
      const service = clients.find((service) => service.id === params.id);
      if (service) {
        setService(service);
      }
    }
  }, []);

  const onSubmit = (data: Service) => {
    console.log({ data });
    if (params.id) {
      dispatch(editService(service));
    } else {
      dispatch(createService({ ...data, id: uuid() }));
    }
    navigate("/service");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleBackNavigation = () => {
    navigate(-1);
  };
  return (
    <Container>
      <h1>Service Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Service Title"
          {...register("title", {
            required: !params.id,
          })}
          value={service.title}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          placeholder="Service id"
          {...register("id", {
            required: !params.id,
          })}
          value={service.id}
          onChange={handleOnChange}
        />
        <Input
          type="date"
          placeholder="Start date"
          {...register("startDate", {
            required: !params.id,
          })}
          value={service.startDate}
          onChange={handleOnChange}
        />
        <Input
          type="date"
          placeholder="End date"
          {...register("endDate", {
            required: !params.id,
          })}
          value={service.endDate}
          onChange={handleOnChange}
        />
        <Input
          type="number"
          placeholder="Price"
          {...register("price", {
            required: !params.id,
          })}
          value={service.price}
          onChange={handleOnChange}
        />
        <Stack direction="column" spacing={2}>
          <Button variant="outlined" type="submit">
            {params.id ? "Update service" : "Create service"}
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

export default ServiceForm;
