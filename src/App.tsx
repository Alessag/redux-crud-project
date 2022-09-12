import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ClientForm from "./components/ClientForm";

import "./App.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/client">Client service</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="client" element={<ClientForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
