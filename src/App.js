import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Footer/Header/Header";
import { Routers } from "./Router/Routers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Header />
        <Routers />
        <Footer />
      </>
    </div>
  );
}

export default App;
