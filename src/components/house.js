import React from 'react';
import { NewRoomForm } from './new-room-form';

//Stateless Component - Pass in Props that are coming in
export const House = (props) => {
	//Use deconstructing from props to get house and updateHouse(method)
	const { house, updateHouse } = props;

	//DELETE request to delete room and update the House API
	const deleteRoom = (roomId) => {
		//Create new variable assigned to capture room ID in House Object
		const updatedHouse = {
			...house, //spread house of current house component
			rooms: house.rooms.filter((list) => list._id !== roomId), //Filter out the room with the ID we are deleting
		};
		return updateHouse(updatedHouse); //Pass variable into updateHouse method to be updated in the state and API
	};

	const addNewRoom = (room) =>
		//Pass House Object and new array of rooms that includes new room
		updateHouse({ ...house, rooms: [...house.rooms, room] });

	//Create a Component of Room inside House Component since they are only apart of House
	const rooms = () => {
		return (
			<ul>
				{/**Create an instance of each room in the rooms component as an li */}
				{house.rooms.map((room, index) => (
					<li key={index}>
						<label>{`${room.name} Area: ${room.area}`}</label>
						<button onClick={(event) => deleteRoom(room._id)}>
							Delete Room
						</button>
					</li>
				))}
			</ul>
		);
	};

	//Essentially one Large Function that can be returned
	return (
		<div className="card-body border m-3 w-75">
			<div className="border-bottom mb-2">
				<h1>{house.name}</h1>
				<button className="btn btn-danger mb-2">Delete House</button>
			</div>
			<div className="list-group">
				{rooms({ rooms, houseId: house._id, deleteRoom })}
			</div>
			<NewRoomForm addNewRoom={addNewRoom} />
		</div>
	);
};
