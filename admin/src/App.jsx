/** @format */

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3500,
          style: {
            direction: "rtl",
            fontFamily: "PelakFA",
            borderRadius: "14px",
          },
        }}
      />

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
