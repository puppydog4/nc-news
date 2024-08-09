/* eslint-disable react/prop-types */
import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ errorMessage }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        mt: "15%",
        ml: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#721c24",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" component="h1" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {errorMessage ||
          "An unexpected error has occurred. Please try again later."}
      </Typography>
      <Button
        variant="outlined"
        aria-label="go to homepage"
        sx={{ color: "black" }}
        onClick={handleGoHome}
      >
        Go to Homepage
      </Button>
    </Box>
  );
}
