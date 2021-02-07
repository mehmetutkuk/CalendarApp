import {createSlice} from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    header: 'Calendar',
    loading: false
  },
  reducers: {
    changeLayoutHeader(state, action) {
        state.header = action.payload;
    },
    setLoading(state,action) {
      state.loading = action.payload;
    }
  },
});

export const {changeLayoutHeader, setLoading} = layoutSlice.actions;

export default layoutSlice.reducer;
