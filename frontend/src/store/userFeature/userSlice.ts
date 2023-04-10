import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

export interface User {
  _id: string;
  user_name: string;
  user_firstname: string;
  user_lastname: string;
  user_telephone: string;
  user_address: string;
  user_email: string;
  user_password: string;
  user_token: string;
  user_level: string;
}

interface UserState {
  users: User[];
  
}

const initialState: UserState = {
  users: [],
 
};

export const UserSlice = createSlice({
  name: "user",
  initialState : initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{
        _id: string;
        user_name: string;
        user_firstname: string;
        user_lastname: string;
        user_telephone: string;
        user_address: string;
        user_email: string;
        user_password: string;
        user_token: string;
        user_level: string;
      }>
    ) => {
      state.users.push({
        _id: action.payload._id,
        user_name: action.payload.user_name,
        user_firstname: action.payload.user_firstname,
        user_lastname: action.payload.user_lastname,
        user_address: action.payload.user_address,
        user_telephone: action.payload.user_telephone,
        user_email: action.payload.user_email,
        user_password: action.payload.user_password,
        user_token: action.payload.user_token,
        user_level: action.payload.user_level,
      });
     
    }, 
    getLoginUser: (state)=>{
       
       console.log("555")
    }


  },
});

export default UserSlice.reducer;

export const { loginUser, getLoginUser } = UserSlice.actions;
