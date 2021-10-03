//Logic for houses API endpoint -- own class so we can use the API calls anywhere
const HOUSES = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
	//READ - GET - GET HOUSES
	getHouses = async () => {
		//Wrap in a try/catch block to handle errors from network call
		try {
			const response = await fetch(HOUSES);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log('getHouses had an issue.', error);
		}
	};

	//UPDATE -- PUT - UPDATE HOUSE
	update = async (house) => {
		try {
			const response = await fetch(`${HOUSES}/${house._id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(house),
			});
			return await response.json();
		} catch (error) {
			console.log('updateHouse had an issue.', error);
		}
	};

	//CREATE -- POST --CREATE HOUSE
	post = async (newHouse) => {
		try {
			const response = await fetch(HOUSES, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newHouse),
			});
			return await response.json();
		} catch (error) {
			console.log('Create New House had an issue', error);
		}
	};

	//DELETE - DELETE HOUSE
	delete = async (house) => {
		try {
			const response = await fetch(`${HOUSES}/${house._id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			return await response.json();
		} catch (error) {
			console.log('Delete House had an issue', error);
		}
	};
}

export const housesApi = new HousesApi();
