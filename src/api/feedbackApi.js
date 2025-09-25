import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// POST - Submit feedback
export const submitFeedbackApi = async (formData) => {
  const response = await axios.post(`${BASE_URL}/feedback`, formData);
  return response.data;
};

// GET - Fetch all feedbacks (admin)
export const fetchFeedbackApi = async () => {
  const response = await axios.get(`${BASE_URL}/feedbacks`);
  return response.data;
};
