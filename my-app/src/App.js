import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Protected from "./Components/Protected";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Protected />}>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
