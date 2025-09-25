import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitFeedbackApi, fetchFeedbackApi } from '../api/feedbackApi';

// Async thunk - submit feedback
export const submitFeedback = createAsyncThunk(
  'feedback/submitFeedback',
  async (formData, { rejectWithValue }) => {
    try {
      return await submitFeedbackApi(formData);
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Async thunk - fetch feedback (admin view)
export const fetchFeedback = createAsyncThunk(
  'feedback/fetchFeedback',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchFeedbackApi();
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const initialState = {
  step: 0,
  data: {
    fullName: '',
    email: '',
    phone: '',
    purchaseDate: new Date().toISOString().split('T')[0],
    products: [],
    feedback: '',
    // ratings: { quality: 0, staff: 0, overall: 0 },
    signature: null,
  },
  loading: false,
  success: false,
  error: null,
  feedbackList: [],
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step < 4) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 0) state.step -= 1;
    },
    updateField: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Submit Feedback
      .addCase(submitFeedback.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitFeedback.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Feedback (Admin)
      .addCase(fetchFeedback.fulfilled, (state, action) => {
        state.feedbackList = action.payload;
      });
  },
});

export const { nextStep, prevStep, updateField, resetForm } = feedbackSlice.actions;
export default feedbackSlice.reducer;
