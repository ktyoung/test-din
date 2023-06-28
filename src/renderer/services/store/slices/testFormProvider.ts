import { createSlice } from '@reduxjs/toolkit';
import { TestForm } from '@interfaces';

import type { ScoreItemType } from './scoreProvider';

const initialState = {} as TestForm;

const testFormSlice = createSlice({
  name: 'testForm',
  initialState,
  reducers: {
    setTestForm: (state, action) => {
      Object.assign(state, action.payload);
    },
    setTestResult: (state, action) => {
      const testDate = (new Date()).toISOString().split('T')[0];
      const res = calculateResult(action.payload);

      state.test_date = testDate;
      state.test_result = res;
    },
    resetDefaultForm: (state) => {
      state.user_name = undefined;
      state.birthday = undefined;
      state.patient_no = undefined;
    },
    resetForm: () => initialState
  }
});

const calculateResult = (results: ScoreItemType[]): number => {
  let total = 0;
  const skip = 6;
  let _results = results;

  if (_results.length > 12) {
    _results = results.slice(0, -skip).slice(skip);
  }

  _results.forEach((result) => {
    total += result.volume_level;
  });

  const res = parseFloat((total / results.length).toFixed(2));
  return res;
}

export const {
  setTestForm,
  setTestResult,
  resetDefaultForm,
  resetForm
} = testFormSlice.actions;

export default testFormSlice.reducer;
