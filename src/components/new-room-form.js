import React, { useState } from 'react';

export const NewRoomForm = (props) => {
	const [name, setName] = useState('');
	const [area, setArea] = useState('');

	const HandleAreaInput = (event) => {
		const number = parseInt(event.target.value, 10);
		setArea(number >= 0 ? number : '');
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (name && area) {
			props.addNewRoom({ name, area });
			setName('');
			setArea('');
		} else {
			console.log('invalid input');
		}
	};

	return (
		<div className='form-control text-center'>
			<h3>Add a New Room</h3>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name"
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
				<input
					type="text"
					placeholder="Area"
					onChange={HandleAreaInput}
					value={area}
				/>
				<button className='btn btn-primary' type="submit">Add Room</button>
			</form>
		</div>
	);
};
