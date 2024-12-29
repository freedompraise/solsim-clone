import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
