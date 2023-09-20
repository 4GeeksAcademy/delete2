import React, {useState, useForm} from "react";
import { Link } from "react-router-dom";


export const AddContact = () => {
	const [formData, setFormData] = useState({fullname: "", email: "", phone: "", address: ""});

	const handleChange = (event) => {
		setFormData(event.target.value);
	  };
	
	  const handleSubmit = (event) => {
		event.preventDefault();
		actions.updateContact({fullname: formData.fullname, email: formData.email, phone: formData.number, address: formData.address})
		alert(`Full Name: ${formData.fullname}, Email: ${formData.email}, Number: ${formData.number}, Address: ${formData.address}`
		);
	};

	return (
		<div className="container addcontactwrapper">
			<form onSubmit={handleSubmit}>

				<label className="form-label">Full Name </label>
				<input className="input-data" type="text" placeholder="Full name" id="full_name" value={formData.fullname} onChange={handleChange}/>
				
				<label className="form-label">Email </label>
				<input className="input-data" type="email" placeholder="Enter email" id="email" value={formData.email} onChange={handleChange}/>
				
				<label className="form-label">Phone </label>
				<input className="input-data" type="number" placeholder="Enter phone" id="phone" value={formData.phone} onChange={handleChange}/>
				
				<label className="form-label">Address </label>
				<input className="input-data" type="text" placeholder="Enter address" id="address" value={formData.address} onChange={handleChange}/>
				
				
				<button type="submit" value="Submit" className="addcontact-button" onClick={handleSubmit}>Save</button>		
				<Link to={"/"}>
					<p className="contactlink">or get back to contacts</p>
				</Link>
				
			</form>	
		</div>
	);
}