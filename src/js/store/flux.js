const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			apiContacts: [],
		},
		actions: {
			loadContacts: () => {
				const store = getStore();
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/eduardo_rocha", {
					method: "GET",
					headers: {
					"Content-Type": "application/json"
					}
					})
					.then(resp => resp.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			updateContacts: (newContact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
				method: "POST",
				body: JSON.stringify(newContact),
				headers: {
				  "Content-Type": "application/json",
				},
			  })
			  .then(response=>response.status === 200 ? getData():"")
			  .catch((error) => console.log("error", error));
			},
				
			editContact: (contact, id) => {
				fetch('https://playground.4geeks.de/apis/fake/contact/' + id , {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
					  "Content-Type": "application/json",
					},
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data); 
						getData();
				})
					.catch(error => console.log(error));
			},
				
			deleteContact: (id) => {
				fetch('https://playground.4geeks.de/apis/fake/contact/' + id , {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					  },
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data); 
						getData();
				})
					.catch(error => console.log(error));
			}
		}		
	};
};

export default getState;