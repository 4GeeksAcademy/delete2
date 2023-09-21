import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext";

import { Contacts } from "./views/contacts";
import { AddContact } from "./views/addContact";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="wrapper mx-auto">
			<BrowserRouter basename={basename}>
				<Routes>
					<Route exact path="/" component={Contacts} />
					<Route exact path="/contacts" component={Contacts} />
					<Route exact path="/addcontact" component={AddContact} />
					<Route exact path="/edit" component={AddContact} />
					<Route render={() => <h1 className="notfound">Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
