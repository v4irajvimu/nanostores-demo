import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FlintThemeProvider } from "@wiley-flint/theme";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/counter",
      element: <CounterPage />,
    },
  ]);

  return (
    <FlintThemeProvider variant="default" type="light">
      <RouterProvider router={router} />
    </FlintThemeProvider>
  );
}

export default App;
