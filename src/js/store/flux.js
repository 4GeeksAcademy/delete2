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
					.then(data => setStore({ "contacts": data }))

			}
		}
	};
};

export default getState;
