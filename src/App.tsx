import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FlintThemeProvider } from "@wiley-flint/theme";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import PlayerPage from "./pages/PlayerPage";
import ReaderPage from "./pages/Reader";

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
    {
      path: "/player",
      element: <PlayerPage />,
    },
    {
      path: "/reader",
      element: <ReaderPage />,
    },
  ]);

  return (
    <FlintThemeProvider variant="default" type="light">
      <RouterProvider router={router} />
    </FlintThemeProvider>
  );
}

export default App;
