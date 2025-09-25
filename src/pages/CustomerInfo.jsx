// src/pages/CustomerInfo.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  FormHelperText,
  Stack,
  Box,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { nextStep, updateField } from "../features/feedbackSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const productsList = ["Shirts", "Pants", "Dresses", "Jackets", "Shoes", "Accessories"];

function CustomerInfo() {
  const dispatch = useDispatch();
  const savedValues = useSelector((state) => state.feedback.data);

  // 👉 today’s date
  const today = dayjs();

  // merge saved values with today's date if purchaseDate is empty
  const defaultValues = {
    ...savedValues,
    purchaseDate: savedValues.purchaseDate
      ? dayjs(savedValues.purchaseDate)
      : today,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    if (!data.products || data.products.length === 0) {
      return; // handled by validation
    }

    const formattedData = {
      ...data,
      purchaseDate: dayjs(data.purchaseDate).format("YYYY-MM-DD"),
    };

    dispatch(updateField(formattedData));
    dispatch(nextStep());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
    {/* Section Heading */}
    <Typography
      variant="h6"
      fontWeight={600}
      color="text.primary"
      gutterBottom
      sx={{
        mb: { xs: 2, sm: 2.5, md: 3 },
        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.4rem" },
        lineHeight: { xs: 1.3, sm: 1.35, md: 1.4 },
      }}
    >
      Customer Information
    </Typography>

    <Stack spacing={3} sx={{ width: "100%" }}>
      {/* Row 1: Full Name */}
      <Controller
        name="fullName"
        control={control}
        rules={{ required: "Full name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Full Name *"
            placeholder="Enter your full name"
            fullWidth
            size="small"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" } }}
          />
        )}
      />

      {/* Row 2: Email + Phone */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        sx={{ width: "100%" }}
      >
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Please enter a valid email address",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="Email Address *"
              placeholder="Enter your email"
              fullWidth
              size="small"
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" } }}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Please enter a valid 10-digit phone number",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number *"
              placeholder="Enter 10-digit phone number"
              fullWidth
              size="small"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" } }}
            />
          )}
        />
      </Stack>

      {/* Row 3: Date + Products */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        sx={{ width: "100%" }}
      >
        <Controller
          name="purchaseDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              label="Date of Purchase"
              value={field.value || today}
              onChange={(newValue) => field.onChange(newValue)}
              maxDate={today}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  sx: { fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" } },
                },
              }}
            />
          )}
        />

        <Controller
          name="products"
          control={control}
          rules={{ required: "Please select at least one product" }}
          render={({ field }) => (
            <FormControl fullWidth size="small" error={!!errors.products}>
              <InputLabel>Products Purchased *</InputLabel>
              <Select
                {...field}
                multiple
                input={<OutlinedInput label="Products Purchased *" />}
              >
                {productsList.map((product) => (
                  <MenuItem key={product} value={product}>
                    {product}
                  </MenuItem>
                ))}
              </Select>

              {errors.products && (
                <FormHelperText>{errors.products.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Stack>

      {/* Row 4: Next Button */}
      <Box display="flex" justifyContent={{ xs: "center", sm: "flex-end" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
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
    </Stack>
  </form>
</LocalizationProvider>

  );
}

export default CustomerInfo;
