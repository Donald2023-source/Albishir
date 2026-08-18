import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./components/Layout";
import Programs from "./pages/Programs/Programs";
import Gallery from "./pages/Gallery/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
