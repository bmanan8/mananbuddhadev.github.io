import React from "react";
import { createRoot } from "react-dom/client";
import "./../styles/globals.css";
import App from "./App";

const container = document.getElementById("root");
createRoot(container).render(<App />);
