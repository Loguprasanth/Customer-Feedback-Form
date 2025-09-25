// src/pages/SignatureForm.jsx
import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import SignatureCanvas from "react-signature-canvas";
import { prevStep, updateField, nextStep } from "../features/feedbackSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { submitFeedback } from "../features/feedbackSlice";


function SignatureForm() {
  const { data, loading, error, success } = useSelector((state) => state.feedback);

  const dispatch = useDispatch();
  const sigCanvas = useRef();
  const containerRef = useRef();

  // Resize canvas dynamically
  useEffect(() => {
    if (containerRef.current && sigCanvas.current) {
      const width = containerRef.current.offsetWidth;
      sigCanvas.current.clear();
      sigCanvas.current.getCanvas().width = width;
      sigCanvas.current.getCanvas().height = 200;
    }
  }, []);

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  const handleSubmit = () => {
  if (sigCanvas.current.isEmpty()) {
    toast.error("Signature is required!");
    return;
  }

  const signatureData = sigCanvas.current.getCanvas().toDataURL("image/png");

  // Update signature in redux state
  dispatch(updateField({ signature: signatureData }));

  // Call API with full form data (including signature)
  dispatch(submitFeedback({ ...data, signature: signatureData }))
    .unwrap()
    .then(() => {
      toast.success("Feedback submitted successfully!");
      dispatch(nextStep()); // move to success screen
    })
    .catch((err) => {
      toast.error(`Failed to submit: ${err}`);
    });
};


  return (
   <form style={{ width: "100%" }}>
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
    Digital Signature
  </Typography>

  {/* Signature Canvas */}
  <Box ref={containerRef} sx={{ mb: { xs: 3, sm: 3.5, md: 4 } }}>
    <Typography
      variant="subtitle1"
      gutterBottom
      sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" } }}
    >
      Please sign below
    </Typography>

    <SignatureCanvas
      ref={sigCanvas}
      penColor="black"
      canvasProps={{
        className: "signatureCanvas",
        style: {
          border: "2px dashed #d1d5db",
          borderRadius: "8px",
          backgroundColor: "#f9fafb",
          width: "100%", // responsive width
          height: "200px", // can also make responsive if needed
        },
      }}
    />

    {/* Clear Button */}
    <Box display="flex" justifyContent="center" gap={2} mt={2}>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ClearIcon />}
        onClick={handleClear}
        sx={{
          px: { xs: 3, sm: 4 },
          py: { xs: 1.2, sm: 1.5 },
          borderRadius: 2,
          textTransform: "none",
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
        }}
      >
        Clear
      </Button>
    </Box>
  </Box>

  {/* Navigation Buttons */}
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }}
    justifyContent="space-between"
    gap={{ xs: 2, sm: 0 }}
    mt={4}
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
      variant="contained"
      color="primary"
      endIcon={<CheckIcon />}
      onClick={handleSubmit}
      disabled={loading} // disable while API is in progress
      sx={{
        px: { xs: 3, sm: 4 },
        py: { xs: 1.2, sm: 1.5 },
        borderRadius: 2,
        textTransform: "none",
        width: { xs: "100%", sm: "auto" },
        fontSize: { xs: "0.9rem", sm: "1rem" },
      }}
    >
      {loading ? "Submitting..." : "Submit Feedback"}
    </Button>
  </Box>
</form>

  );
}

export default SignatureForm;
