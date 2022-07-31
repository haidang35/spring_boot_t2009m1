import { CircularProgress } from "@mui/material";
import React from "react";
import "./loader.scss";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
      <CircularProgress color="success" />
    </div>
  </div>
);
export default Loader;
