const logger = store => next => action => {
	if( action.type === 'error' ) console.log('Error happend');

	next( action ); 													// this action is .dispatch( actionObject )
};

export default logger;
