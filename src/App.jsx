import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<RootLayout />} />
        <Route path={"/"} element={<RootLayout />} />
        <Route path={"/"} element={<RootLayout />} />
        <Route path={"/"} element={<RootLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
