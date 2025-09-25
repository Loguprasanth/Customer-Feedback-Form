import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { resetForm } from "../features/feedbackSlice";

function SuccessScreen() {
  const dispatch = useDispatch();

  const handleNewForm = () => {
    dispatch(resetForm()); // clears state and goes back to step 0
  };

  return (
   <Box
  sx={{
    backgroundColor: "white",
    borderRadius: 2,
    p: { xs: 3, sm: 4, md: 6 }, // responsive padding
    textAlign: "center",
  }}
>
  {/* Success Icon */}
  <CheckCircleIcon
    sx={{
      fontSize: { xs: 60, sm: 70, md: 80 }, // responsive icon size
      color: "rgb(34 197 94)",
      mb: { xs: 2, sm: 2.5, md: 3 }, // responsive margin-bottom
    }}
  />

  {/* Heading */}
  <Typography
    variant="h4"
    fontWeight="bold"
    color="text.primary"
    gutterBottom
    sx={{
      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // responsive font
      mb: { xs: 1.5, sm: 2, md: 2.5 },
    }}
  >
    Thank You!
  </Typography>

  {/* Message */}
  <Typography
    variant="body1"
    color="text.secondary"
    sx={{
      mb: { xs: 3, sm: 3.5, md: 4 },
      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
      lineHeight: { xs: 1.4, sm: 1.5 },
    }}
  >
    Your feedback has been submitted successfully.
  </Typography>

  {/* Button */}
  <Button
    variant="contained"
    color="primary"
    onClick={handleNewForm}
    sx={{
      px: { xs: 3, sm: 4 },
      py: { xs: 1.2, sm: 1.5 },
      borderRadius: 2,
      textTransform: "none",
      fontSize: { xs: "0.9rem", sm: "1rem" },
    }}
  >
    Submit Another Feedback
  </Button>
</Box>

  );
}

export default SuccessScreen;
