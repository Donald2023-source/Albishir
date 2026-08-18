import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
