import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { Login } from '../api/user';

export const loginAsync = createAsyncThunk(
  'user/loginAsync',
  async (user) => {
    var res = await Login(user);
    console.log("result login", res.data);
    return res.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: ''
  },
  reducers: {
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
        state.errorMessage = null;
        if(action.payload.errorState === true){
          state.error=true;
          state.errorMessage = action.payload.message;
          return;
        }
        const {email, loggedIn} = action.payload[0];
        state.isLoggedIn = loggedIn;
        state.email = email;
        state.accessDenied = !loggedIn;
        state.error= false;
    },
    [loginAsync.rejected]: (state, action) => {
      state.error = true;
      state.errorMessage = "Bağlantı sağlanamadı!";
    },
    [loginAsync.pending]: (state, action) => {
      state.error= false;
      state.errorMessage='';
      state.accessDenied = false;
    }
  }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
