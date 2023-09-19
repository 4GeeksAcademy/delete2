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
		<form onSubmit={handleSubmit} classname="addcontactfrom">

			<div className="row">
				<label htmlFor="fullname" className="form-label">Full Name </label>
				<input type="text" placeholder="Full name" id="full_name" value={formData.fullname} onChange={handleChange}/>
			</div>
		
			<div className="row">
			<label htmlFor="email" className="form-label">Email </label>
			<input type="email" placeholder="Enter email" id="email" value={formData.email} onChange={handleChange}/>
			</div>
			
			<div className="row">
			<label htmlFor="phone" className="form-label">Phone </label>
			<input type="number" placeholder="Enter phone" id="phone" value={formData.phone} onChange={handleChange}/>
			</div>

			<div className="row">
			<label htmlFor="address" className="form-label">Address </label>
			<input type="text" placeholder="Enter address" id="address" value={formData.address} onChange={handleChange}/>
			</div>

			<div className="d-flex justify-content-center text-center">
				<Link to={"/"}>
					<button className="btn btn-primary">Save</button>
				</Link>
			</div>
		</form>
		</div>
	);
}