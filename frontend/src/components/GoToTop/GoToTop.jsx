import React from "react";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const goToTopIcon = {
  position: "fixed",
  bottom: "2.5rem",
  right: "2.5rem",
  zIndex: "5",
  fontSize: '2.3rem',
  ':hover': {
    cursor: 'pointer'
  }
};
export default function GoToTop() {
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={goToTopIcon }>
      <FontAwesomeIcon
        onClick={() => scrollToTopHandler()}
        icon={faArrowAltCircleUp}
      />
    </Box>
  );
}
