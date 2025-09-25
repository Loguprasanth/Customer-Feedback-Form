// src/App.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Stepper, Step, StepLabel, Container, Paper, Typography } from '@mui/material';
import CustomerInfo from './pages/CustomerInfo';
 import FeedbackForm from './pages/FeedbackForm';
 import RatingsForm from './pages/RatingsForm';
import SignatureForm from './pages/SignatureForm';
import { ToastContainer } from 'react-toastify';
import SuccessScreen from "./pages/SuccessScreen";
import 'react-toastify/dist/ReactToastify.css';

const steps = ['Customer Info', 'Feedback', 'Ratings', 'Signature', 'Success'];

function App() {
  const step = useSelector((state) => state.feedback.step);

  const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <CustomerInfo />;
    case 1:
      return <FeedbackForm />;
    case 2:
      return <RatingsForm />;
    case 3:
      return <SignatureForm />;
    case 4:
      return <SuccessScreen />;
    default:
      return <CustomerInfo />;
  }
};


  return (
    <Container  sx={{ py: 5,height:"100%" }}>
      
        {/* Header */}
        <Box
  textAlign="center"
  mb={{ xs: 3, sm: 4, md: 5 }} // responsive margin-bottom
  px={{ xs: 2, sm: 4, md: 6 }} // responsive horizontal padding
>
  {/* Main Heading */}
  <Typography
    variant="h4"
    fontWeight="bold"
    gutterBottom
    sx={{
      fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
      lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
    }}
  >
    Customer Feedback Form
  </Typography>

  {/* Subheading */}
  <Typography
    variant="subtitle1"
    color="text.secondary"
    sx={{
      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' },
      lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
      mt: { xs: 1, sm: 1.5, md: 2 }, // spacing between heading and subheading
    }}
  >
    Help us improve your shopping experience
  </Typography>
</Box>


        {/* Stepper */}
        {/* Stepper – hide on Success Screen */}
{step < 4 && (
  <Stepper
    activeStep={step}
    alternativeLabel
    sx={{
      mb: 4,
      '& .MuiStepIcon-root.Mui-active': { color: 'primary.main' },
      '& .MuiStepIcon-root.Mui-completed': { color: 'primary.main' },
      '& .MuiStepLabel-label': {
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
      },
    }}
  >
    {steps.slice(0, 4).map((label, index) => (
      <Step key={index}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
)}


<Paper sx={{ p: { xs: 2, sm: 4 } }}>

        {/* Step Content */}
        <Box>{getStepContent(step)}</Box>
      </Paper>
      <ToastContainer position="top-center" />
    </Container>
  );
}

export default App;
