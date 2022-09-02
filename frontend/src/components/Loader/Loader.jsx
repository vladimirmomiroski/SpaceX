import React from "react";

const image = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:'5rem',
  height:'5rem'
};

export default function Loader() {
  return <img style={image} src="images/loading.png" alt="loading" />;
}
