const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			agendas: [],
			currentAgenda: 'eduardo_rocha',
			contacts: []
		},
		actions: {
			loadAgendas: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda')
					.then(res => res.json())
					.then(data => setStore({ "agendas": data }))
			},

			loadContacts: (agenda) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`)
					.then(res => res.json())
					.then(contactList => setStore({ "contacts": [...contactList]}))

			},
			updateContacts: (formData) => {
				fetch('https://playground.4geeks.com/apis/fake/todos/user/${agenda}', {
				method: 'PUT',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					"fullname": formData.fullname,
					"email": formData.email,
					"address": formData.phone,
					"phone": formData.address,
				}),
				})
				.then(response => response.json())
				.then(data => setStore({"contacts": data}))

			}
		}
	};
};

export default getState;
