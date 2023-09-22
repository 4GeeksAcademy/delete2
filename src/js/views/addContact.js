import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [full_name, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	return (
		<div className="container addcontactwrapper">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
						<div className="form-group">
							<label className="form-label">Full Name </label>
							<input className="input-data" type="text" placeholder="Full name" id="full_name" value={full_name} onChange={e => setFullName(e.target.value)}/>
						</div>

						<div className="form-group">
							<label className="form-label">Email </label>
							<input className="input-data" type="email" placeholder="Enter email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
						</div>

						<div className="form-group">	
							<label className="form-label">Phone </label>
							<input className="input-data" type="number" placeholder="Enter phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
						</div>

						<div className="form-group">	
							<label className="form-label">Address </label>
							<input className="input-data" type="text" placeholder="Enter address" id="address" value={address} onChange={e => setAddress(e.target.value)}/>
						</div>

						<button onClick={() => actions.updateContact()} type="submit" value="Submit" className="btn btn-primary addcontact-button">Save</button>		
						<Link to={"/"}>
							<p className="contactlink">or get back to contacts</p>
						</Link>
				</form>
			</div>
		</div>
	);
};