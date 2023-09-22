const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			apiContacts: [],
			localContacts: [
				{
					full_name: "Test Name",
					email: "test@test.com",
					address: "9876 Test Road",
					phone: "12345689"
				}
			]
		},
		actions: {
			loadContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha')
				.then(response => {
					console.log(response.ok); // will be true if the response is successfull
					console.log(response.status); // the status code = 200 or code = 400 etc.
					if(response.ok){
					  return response.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					}
					throw response;    
				})
				.then(data => {
					setStore(contactList => setStore({ "contacts": [...contactList]}));
				})
				.catch(error => {
					console.error("Error fetching date: ", error);
					if (error.message.includes("404")) {
					  fetch('https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha', { // this creates the user eduardo if not detected in the server
						method: 'POST',
						body: JSON.stringify([]),
						headers: {
						  'Content-Type': 'application/json'
						}
					  })
						.then(response => response.json())
						.then(data => {
						  console.log(data)
						  setStore([])
						})
					}   
				})
			},

			updateContacts: (full_name, email, phone, address, saveLocation, history) => {
				let store = getStore();
				console.log("CLICK", store);
				// This method will receive name, address, phone and email from addContact view
				// and it will post to the backend or to the store
				saveContact === 'store'
				? setStore({
					localContacts: store.localContacts.concat({
						full_name: full_name,
						email: email,
						address: address,
						phone: phone
					})
			  		}) :
					fetch('https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha', {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							full_name: full_name,
							email: email,
							address: address,
							phone: phone
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
					let updated_store = store.localContacts
						.slice(0, index)
						.concat({
							...store.localContacts[index],
							full_name: full_name,
							email: email,
							address: address,
							phone: phone
						})
						.concat(store.localContacts.slice(index + 1));
					console.log('Upd', updated_store);
					setStore({ localContacts: updated_store });
					saveLocation === 'store'
						? setStore({
								localContacts: store.localContacts.splice(index, 1, {
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
				setStore({ localContacts: store.localContacts.filter((item, index) => index !== index) });
			}
		}		
	};
};

export default getState;