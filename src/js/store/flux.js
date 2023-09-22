const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			apiContacts: [],
		},
		actions: {
			loadContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha')
				.then(response => {
					console.log(response.ok); // will be true if the response is successfull
					console.log(response.status); // the status code = 200 or code = 400 etc.
					if(!response.ok){
					throw new Error('Network Error'); 
					}
					return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					   
				})
				.then(data => {setStore({apiContacts: data["agenda_slug"]});
					console.log(data);
				})
				.catch(error => {
					console.error("Error fetching date: ", error);
					if (error.message.includes("404")) {
					  fetch('https://playground.4geeks.com/apis/fake/contact/', { // this creates the user eduardo if not detected in the server
						method: 'POST',
						headers: {
						  'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							full_name: "Test Name",
							email: "test@test.com",
							agenda_slug: "eduardo_rocha",
							address: "9876 Test Road",
							phone: "12345689",
							contact_id: "994488576"
						})
					  })
						.then(response => response.json())
						.then(response => {
						  console.log(response)
						  setStore({apiContacts: response["agenda_slug"]})
						})
					}   
				})
				.then(() => console.log("THEN"));
			},

			updateContacts: (full_name, email, phone, address, saveLocation, history) => {
				let store = getStore();
				console.log("CLICK", store);
				// This method will receive name, address, phone and email from addContact view
				// and it will post to the backend or to the store
				saveLocation === 'store'
				? setStore({
					apiContacts: store.apiContacts.concat({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone
					})
			  		}) :
					fetch(`https://playground.4geeks.com/apis/fake/contact/eduardo_rocha`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							full_name: full_name,
							email: email,
							agenda_slug: "eduardo_rocha",
							address: address,
							phone: phone,							
						})
			 		 })
					.then(() => {
						fetch('https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha')
							.then(response => response.json())
							.then(data => {
								setStore({ apiContacts: data });
							});
					})

					.then(() => history.push('/contacts/api'));
			},
				
			editContact: (full_name, email, address, phone, saveLocation, index) => {
					let store = getStore();
					let updated_store = store.apiContacts
						.slice(0, index)
						.concat({
							...store.apiContacts[index],
							full_name: full_name,
							email: email,
							address: address,
							phone: phone
						})
						.concat(store.apiContacts.slice(index + 1));
					console.log('Upd', updated_store);
					setStore({ localContacts: updated_store });
					saveLocation === 'store'
						? setStore({
								apiContacts: store.apiContacts.splice(index, 1, {
									...store[index],
									full_name: full_name,
									email: email,
									address: address,
									phone: phone
								})
						})
						: console.log('api:', full_name, email, address, phone).then(() => history.push("/"));
			},
				
			deleteContact: index => {
				let store = getStore();
				console.log("index", index);
				setStore({ apiContacts: store.apiContacts.filter((item, index) => index !== index) });
			}
		}		
	};
};

export default getState;