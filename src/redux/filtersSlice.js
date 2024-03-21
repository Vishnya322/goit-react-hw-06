import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

// export const filtersReducer = (state = { name: '' }, action) => {
//   switch (action.type) {
//     case 'filters/changeFilter':
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const changeFilter = value => {
//   return {
//     type: 'filters/changeFilter',
//     payload: value,
//   };
// };
