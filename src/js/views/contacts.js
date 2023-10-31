import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard";
import { Modal } from "../component/Modal";


export const Contacts = () => {
	const [state, setState] = useState({showModal: false})

	return (
		<div className="container contactswrapper">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to={"/addcontact/"}>
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<ContactCard onDelete={() => setState({ showModal: true })} />
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};


