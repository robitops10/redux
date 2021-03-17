import axios from 'axios';
import { apiCallBegan, apiCallSuccess, apiCallError } from './../apiAction';


const api = store => next => async action => {
	if( action.type !== apiCallBegan.type ) return next( action );

	next( action ); 																// this action is .dispatch( actionObject )
	const { url, method, data, onSuccess, onError } = action.payload; 	// dispatch( { payload: {...} })


	try{
		const res = await axios({
			baseURL: 'http://localhost:5000',
			url,
			method,
			data
		});

		store.dispatch( apiCallSuccess( res.data ) )

	} catch( err) {
		store.dispatch( apiCallError( err.message ));
	}

};

export default api;
