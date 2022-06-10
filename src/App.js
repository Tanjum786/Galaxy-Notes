import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Footer/Header/Header";
import { Routers } from "./Router/Routers";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <>
        <Toaster position="top-center" reverseOrder={false} />

        <Header />
        <Routers />
        <Footer />
      </>
    </div>
  );
}

export default App;
