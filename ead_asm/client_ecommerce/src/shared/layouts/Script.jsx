import React from "react";

export function AddLibrary(urlOfTheLibrary) {
  document.addEventListener("DOMContentLoaded", (event) => {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  });
}
const Script = () => {
  return (
    <>
      {AddLibrary("/js/main.js")}
      {AddLibrary("/js/plugins.js")}
    </>
  );
};

export default Script;
