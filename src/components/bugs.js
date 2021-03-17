import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react'; 
import { bugAdded, bugRemoved } from '../store/bugs';


const Bugs = () => {
	const dispatch = useDispatch();
	const bugs = useSelector( state => state.entities.bugs );

	useEffect(() => {
		dispatch( bugAdded({description: 'Bug 1'}) )
		dispatch( bugAdded({description: 'Bug 2'}) )
		dispatch( bugAdded({description: 'Bug 3'}) )
	},[]);

	const handleResolved = ( id ) => {
		dispatch( bugRemoved({id}))
	};


	return(
		<div> 
			<ul>
					{ bugs.map( bug => (
							<li key={bug.id}> 
								{bug.description} 		
								<button onClick={ () => handleResolved(bug.id) }> Resolved </button>
							</li>
						)) }
			</ul>
	 	</div>
	);
};

export default Bugs;
