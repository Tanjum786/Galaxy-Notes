import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Footer/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Routers } from "./Router/Routers";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routers/>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
