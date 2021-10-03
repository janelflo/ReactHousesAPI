import React from 'react';
import { House } from './house';
import { housesApi } from '../rest/houses-api';

export class HousesList extends React.Component {
	//state is an Object
	state = {
		houses: [],
	};

	createHouseName = (event) => {
		this.setState({ houses: [event.target.value] });
	};

	//instantiate the network request
	componentDidMount() {
		this.fetchHouses();
	}

	//Send network request to READ Houses API
	fetchHouses = async () => {
		const houses = await housesApi.getHouses();
		//Set the state of the current API houses data
		this.setState({ houses });
	};

	//Send network request to UPDATE house on Houses API
	updateHouse = async (updatedHouse) => {
		await housesApi.update(updatedHouse); //Curent house being updated
		this.fetchHouses(); //reUpdate the state with the new houses
	};

	//Send HTTP request to POST - CREATE - New House
	sendHouse = async (newHouse) => {
		await housesApi.post(newHouse);
		this.fetchHouses();
	};

	//Send HTTP to DELETE house
	deleteHouse = async (house) => {
		await housesApi.delete(house);
		this.fetchHouses();
	};

	render() {
		return (
			<div className="container border">
				<div className="card-body w-75 border m-3">
					<h1 className="text-center">Create a New House</h1>
					<form onSubmit={this.sendHouse} className="text-center">
						<input
							onChange={this.createHouseName}
							className=""
							type="text"
							placeholder="House Name"
							value={this.state.houses.name}></input>
						<button className="btn btn-primary" type="submit">
							Add House
						</button>
					</form>
				</div>
				<div className="house-list">
					{/** Map each house from the states houses to create an instance of House*/}
					{this.state.houses.map((house) => (
						<House
							house={house}
							key={house._id}
							updateHouse={this.updateHouse}
						/>
					))}
				</div>
			</div>
		);
	}
}
