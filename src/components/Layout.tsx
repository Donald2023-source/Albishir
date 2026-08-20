import Footer from "./Footer";
import Navbar from "./Navbar";
import Scroll from "./Scroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Scroll />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
