import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ColorsProvider,NotesProvider } from "./Hooks/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NotesProvider>
      <ColorsProvider>
        <App />
      </ColorsProvider>
    </NotesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
