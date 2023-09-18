import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "./../component/contactCard";
import "../styles/contact.css";

export const Contact = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (params.agendaId) {
			actions.loadContacts(params.agendaId);
		}
	}, [])

	return (
	<div className="row container mx-auto mx-5">
		<div className="wrapper d-flex col-sm-8 flex-column align-items-center justify-content-center">
			<div className="p-2 ">
				<h2>{params.agendaId || store.currentAgenda}'s Agenda</h2>
			</div>

		</div>
		<div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">

		<div className="list-group">
			{store.contacts ? store.contacts.map((contact, index) => <ContactCard key={index} fullName={contact.full_name} />) : "There are no contacts availables"}
			</div>
		</div>

		<h2>Contact View</h2>
		<Link to={"/addcontact"}>
			<button>Add new contact</button>
		</Link>
	</div>
);
}
