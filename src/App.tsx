import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";

import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

import "./App.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">
          <Link to="/client">Clients service</Link>
        </Button>
        <Button variant="outlined">
          <Link to="/service">Services service</Link>
        </Button>
      </Stack>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="client" element={<ClientList />} />
          <Route path="client/create" element={<ClientForm />} />
          <Route path="client/edit/:id" element={<ClientForm />} />

          <Route path="service" element={<ServiceList />} />
          <Route path="service/create" element={<ServiceForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
