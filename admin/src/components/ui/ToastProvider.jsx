/** @format */

import { Toaster } from "react-hot-toast";

/* Toast Provider */

const ToastProvider = () => {
  return (
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 24,
      }}
      toastOptions={{
        duration: 3500,
        style: {
          borderRadius: "14px",
          padding: "14px 18px",
          fontSize: "14px",
          direction: "rtl",
        },
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#ffffff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
