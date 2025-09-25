// src/pages/FeedbackForm.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { nextStep, prevStep, updateField } from "../features/feedbackSlice";
import { toast } from "react-toastify";

function FeedbackForm() {
  const dispatch = useDispatch();
  const defaultValues = useSelector((state) => state.feedback.data);

  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (!data.feedback || !data.feedback.trim()) {
      toast.error("Feedback is required!");
      return;
    }
    dispatch(updateField(data));
    dispatch(nextStep());
  };

  return (
   <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
  {/* Section Heading */}
  <Typography
    variant="h6"
    fontWeight={600}
    color="text.primary"
    gutterBottom
    sx={{
      mb: { xs: 1.5, sm: 2, md: 2.5 }, // responsive margin-bottom
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.4rem" },
      lineHeight: { xs: 1.3, sm: 1.35, md: 1.4 },
    }}
  >
    Purchase Feedback
  </Typography>

  {/* Feedback textarea */}
  <Controller
    name="feedback"
    control={control}
    rules={{ required: "Feedback is required" }}
    render={({ field, fieldState }) => (
      <TextField
        {...field}
        label="Your Feedback *"
        placeholder="Please share your experience with our products and service..."
        multiline
        rows={6}
        fullWidth
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
        sx={{
          fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" }, // responsive font size
        }}
      />
    )}
  />

  {/* Navigation Buttons */}
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }} // stack on mobile
    justifyContent="space-between"
    gap={{ xs: 2, sm: 0 }} // spacing between buttons on mobile
    mt={3}
  >
    <Button
      variant="outlined"
      color="primary"
      startIcon={<ArrowBackIcon />}
      onClick={() => dispatch(prevStep())}
      sx={{
        px: { xs: 3, sm: 4 },
        py: { xs: 1.2, sm: 1.5 },
        borderRadius: 2,
        textTransform: "none",
        width: { xs: "100%", sm: "auto" }, // full width on mobile
      }}
    >
      Previous
    </Button>

    <Button
      type="submit"
      variant="contained"
      color="primary"
      endIcon={<ArrowForwardIcon />}
      sx={{
        px: { xs: 3, sm: 4 },
        py: { xs: 1.2, sm: 1.5 },
        borderRadius: 2,
        textTransform: "none",
        width: { xs: "100%", sm: "auto" }, // full width on mobile
      }}
    >
      Next
    </Button>
  </Box>
</form>

  );
}

export default FeedbackForm;
