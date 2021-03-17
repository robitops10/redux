import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
	name: 'projects',
	initialState: [],
	reducers: {
		projectAdded: (state, action) => state.concat({
			id: ++lastId,
			description: action.payload.description,
			resolved: false
		})
	}
});


export const { projectAdded } = slice.actions;
export default slice.reducer;
