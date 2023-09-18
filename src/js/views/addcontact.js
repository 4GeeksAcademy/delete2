import React from "react";
import { Link } from "react-router-dom";

import "../../styles/addcontact.css";


export const AddContact = () => {

	return (
		<div>
			<h2>Add Contact View</h2>
			<Link to={"/"}>
				<button>View Contacts</button>
			</Link>
		</div>
	);
}