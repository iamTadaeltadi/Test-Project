// modalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    isEdit:false,
    editId:null
  },
  reducers: {
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    editMode: state => {
      state.isEdit = true;
    },
    createMode: state => {
      state.isEdit = false;
    },
    setId: (state, action) => {
  state.editId = action.payload; 
},

  },
});

export const { toggleModal ,createMode,editMode, setId} = modalSlice.actions;
export default modalSlice.reducer;
