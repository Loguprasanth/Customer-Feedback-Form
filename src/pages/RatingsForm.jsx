// src/pages/RatingsForm.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Typography,
  Button,
  Rating,
  FormHelperText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { nextStep, prevStep, updateField } from "../features/feedbackSlice";
import { toast } from "react-toastify";

function RatingsForm() {
  const dispatch = useDispatch();
  const defaultValues = useSelector((state) => state.feedback.data);

  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (!data.quality || !data.staff || !data.overall) {
      toast.error("Please provide all ratings!");
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
      mb: { xs: 1.5, sm: 2, md: 2.5 },
      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.4rem" },
      lineHeight: { xs: 1.3, sm: 1.35, md: 1.4 },
    }}
  >
    Rate Your Experience
  </Typography>

  {/* Ratings Section */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, sm: 3, md: 4 } }}>
    {[
      { name: "quality", label: "Quality of Product *" },
      { name: "staff", label: "Staff Friendliness *" },
      { name: "overall", label: "Overall Experience *" },
    ].map((item) => (
      <Box key={item.name}>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
        >
          {item.label}
        </Typography>

        <Controller
          name={item.name}
          control={control}
          rules={{ required: `Please rate your ${item.name}` }}
          render={({ field, fieldState }) => (
            <>
              <Rating
                {...field}
                value={Number(field.value) || 0}
                onChange={(_, value) => field.onChange(value)}
                sx={{
                  "& .MuiRating-iconFilled": { color: "#0891b2" },
                  "& .MuiRating-iconHover": { color: "#06b6d4" },
                  fontSize: { xs: 25, sm: 30, md: 32 },
                }}
              />
              {fieldState.error && (
                <FormHelperText error>{fieldState.error.message}</FormHelperText>
              )}
            </>
          )}
        />
      </Box>
    ))}
  </Box>

  {/* Navigation Buttons */}
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }}
    justifyContent="space-between"
    gap={{ xs: 2, sm: 0 }}
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
        width: { xs: "100%", sm: "auto" },
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
        width: { xs: "100%", sm: "auto" },
      }}
    >
      Next
    </Button>
  </Box>
</form>

  );
}

export default RatingsForm;
