import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "./../component/contactCard";


export const Contact = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (params.agendaId) {
			actions.loadContacts(params.agendaId);
		}
	}, [])

	return (
	<div className="contactwrapper">
		<div className="row">
			<div className="d-flex justify-content-end">
				<Link to={"/addcontact"}>
					<button type="btn" className="btn btn-success me-3">Add new contact</button>
				</Link>
			</div>
		</div>
		<div className="row">
			<div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
				<div>
					{store.contacts ? 
					store.contacts.map((contact, index) => <ContactCard key={index} fullName={contact.full_name} />) 
					: 
					"Your Contact List is Empty"}
				</div>
			</div>
		</div>
	</div>
);
}
