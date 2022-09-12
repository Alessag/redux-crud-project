import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientForm from "./components/ClientForm";

import "./App.css";

const Home = () => {
  return <h1>Home</h1>;
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
