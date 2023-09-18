import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";

export const Contact = () => {

	return (
	<div>
		<h2>Contact View</h2>
		<Link to={"/addcontact"}>
			<button>Add new contact</button>
		</Link>
	</div>
);
}
