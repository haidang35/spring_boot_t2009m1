import React from "react";
import { useRoutes, Router } from "react-router-dom";
import ThemeRoutes from "./routes/Router";

function App() {
  const routing = useRoutes(ThemeRoutes);
  return <>{routing}</>;
}

export default App;
