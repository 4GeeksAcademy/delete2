import React, {useState} from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {
	const [formData, setFormData] = useState({fullname: "",email: "",number: "", address: "" });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	  };
	
	  const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Full Name: ${formData.fullname}, Email: ${formData.email}, Number: ${formData.number}, Address: ${formData.address}`
		);
	};

	return (
		<div className="container addcontactwrapper">
			<form onSubmit={handleSubmit}>

				<label className="form-label" htmlFor="fullname">Full Name </label>
				<input className="input-data" type="text" placeholder="Full name" id="full_name" value={formData.fullname} onChange={handleChange}/>
				
				<label className="form-label" htmlFor="email">Email </label>
				<input className="input-data" type="email" placeholder="Enter email" id="email" value={formData.email} onChange={handleChange}/>
				
				<label className="form-label" htmlFor="phone">Phone </label>
				<input className="input-data" type="number" placeholder="Enter phone" id="phone" value={formData.phone} onChange={handleChange}/>
				
				<label className="form-label" htmlFor="address">Address </label>
				<input className="input-data" type="text" placeholder="Enter address" id="address" value={formData.address} onChange={handleChange}/>
							
				<Link to={"/"}>
					<button type="button" className="addcontact-button">Save</button>
				</Link>
				
			</form>	
		</div>
	);
}