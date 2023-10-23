import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "User",
    initialState: {
        name: "",
        password: "",
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.password = action.payload.password;
        },
    },
});

export const { setUser } = UserSlice.actions;

export default UserSlice;
