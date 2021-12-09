import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
	

	return (
		<ul class="list-group">
		<li className='list-group-item d-flex justify-content-between align-items-center'>
		{props.name}
		
			<div className='badge badge-primary badge-pill mr-3'>
				${props.cost}
				</div>
				
			<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			
	</li>
	</ul>
	);
};

export default ExpenseItem;