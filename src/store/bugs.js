import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;
const slice = createSlice({
	name: 'bugs',
	initialState: [],
	reducers: {
		bugAdded : (state, action) => state.concat({
				id: ++lastId,
				description: action.payload.description,
				resolved: false
			}), 
		bugRemoved : (state, action) => state.filter( bug => bug.id !== action.payload.id ),
		bugResolved : (state, action) => state.map( bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true } ),

		// bugReceived: (state, action) => state.concat( action.payload ),
	}
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions; 			// auto create createAction
export default slice.reducer; 																						// auto create createReducer

// Reading From Store
// export const getBugsResolved = state => state?.entities.bugs.filter( bug => !bug.resolved );

export const getBugsResolved = createSelector( 
	state => state?.entities.bugs, 
	bugs => bugs.filter( bug => !bug.resolved )
);
