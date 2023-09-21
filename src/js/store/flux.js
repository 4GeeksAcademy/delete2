const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			apiContacts: [],
			localContacts: []
		},
		actions: {
			getAgendas: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
					.then(res => res.json())
					.then(data => setStore({ "agenda": data }))
			},

			getContacts: (agenda) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`)
					.then(res => res.json())
					.then(localContacts => setStore({ "contacts": [...localContacts]}))

			},
			addNewContacts: (full_name, email, address, phone, saveLocation, history) => {
				let store = getStore();
				console.log("CLICK", store);
				// This method will receive name, address, phone and email from addContact view
				// and it will post to the backend or to the store
				saveLocation === "store"
					? setStore({
						localContacts: store.localContacts.concat({
								full_name: full_name,
								email: email,
								address: address,
								phone: phone
							})
					  })
					: fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha`, {
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
								fetch("https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha")
									.then(response => response.json())
									.then(data => {
										setStore({ apiContacts: data });
									});
							})

							.then(() => history.push("/contacts/api"));
			},
			editContact: (name, email, address, phone, saveLocation, index) => {
				let store = getStore();
				let updated_store = store.localContacts
					.slice(0, index)
					.concat({
						...store.localContacts[index],
						name: name,
						email: email,
						address: address,
						phone: phone
					})
					.concat(store.localContacts.slice(index + 1));
				console.log("Upd", updated_store);
				setStore({ localContacts: updated_store });
				saveLocation === "store"
					? setStore({
							localContacts: store.localContacts.splice(index, 1, {
								...store[index],
								name: name,
								email: email,
								address: address,
								phone: phone
							})
					  })
					: console.log("api:", name, email, address, phone).then(() => history.push("/"));
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