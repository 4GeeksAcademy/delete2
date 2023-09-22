import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = () => {
	const { store, actions} = useContext(Context);
	return (
		<a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
			<img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
			<div className="d-flex gap-2 w-100 justify-content-between">
				{store.apiContacts.map((e, index) => {
					<li key={index}>
						<h6 className="mb-0">{e.full_name}</h6>
						<div>
							<p className="mb-0 opacity-75">{e.address}</p>
							<p className="mb-0 opacity-75">{e.phone}</p>
							<p className="mb-0 opacity-75">{e.email}</p>
						</div>
					</li>
				})}
			</div>
		</a>)
};
