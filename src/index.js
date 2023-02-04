import React from "react";
import { createRoot } from "react-dom/client";
import App from "@App";
import '@styles/main.css'

// const container = document.getElementById('root');
// const root = createRoot(container);

createRoot(document.getElementById('root')).render(<App />);