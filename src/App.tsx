import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import Button from "@mui/material/Button";

import "./App.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="outlined">
        <Link to="/client">Client service</Link>
      </Button>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
