import React from "react";
import { useForm } from "react-hook-form";

type Client = {
  name: string;
  fiscalNumber: string;
  incomingDate: Date;
};

const ClientForm = () => {
  const { register, handleSubmit } = useForm<Client>();

  const onSubmit = (data: Client) => {
    console.log(data);
  };

  return (
    <div>
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
        <button>Create client</button>
      </form>
    </div>
  );
};

export default ClientForm;
