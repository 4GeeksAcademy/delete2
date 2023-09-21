import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { Modal } from "../component/Modal";


export const Contacts = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({showModal: false})

	useEffect(() => {
		if (params.agendaId) {
			actions.getContacts(params.agendaId);
		}
	}, [])

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to={"/add-contacts/"}>
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard />
						<ContactCard />
						<ContactCard />
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
