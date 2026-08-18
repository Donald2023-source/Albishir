import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./components/Layout";
import Programs from "./pages/Programs/Programs";
import Gallery from "./pages/Gallery/Gallery";
import GetInvolved from "./pages/Get-Involved/GetInvolved";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
