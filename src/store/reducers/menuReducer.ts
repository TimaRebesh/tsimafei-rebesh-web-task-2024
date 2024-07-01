import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  selectedItemId: string;
}

const initialState: MenuState = {
  selectedItemId: '200',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedMenuItem(state, action: PayloadAction<string>) {
      state.selectedItemId = action.payload;
    },
  },
});

export const { setSelectedMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
