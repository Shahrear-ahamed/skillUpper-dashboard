import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoleSliceState {
  role: string;
}

const initialState: RoleSliceState = {
  role: "",
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: (create) => ({
    changeRole: create.reducer((state, action: PayloadAction<string>) => {
      state.role = action.payload;
    }),
  }),
  selectors: {},
});

export const { changeRole } = roleSlice.actions;

export const {} = roleSlice.selectors;
