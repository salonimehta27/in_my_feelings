import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MdPassword } from "react-icons/md"
import { BsPersonFill, BsPersonLinesFill } from "react-icons/bs"
import PageSwitcher from "./PageSwitcher"
import { useNavigate } from "react-router-dom"
import { Container, Alert } from "react-bootstrap"

function Signup({ onSignup }) {
	const navigate = useNavigate()
	const [errors, setErrors] = useState([])

	const signupObj = {
		name: "",
		username: "",
		password: "",
		passwordConfirmation: "",
		hasAgreed: false,
	}
	const [signupForm, setSignupForm] = useState(signupObj)

	function handleChange(event) {
		let target = event.target
		let value = target.type === "checkbox" ? target.checked : target.value
		let name = target.name

		setSignupForm({ ...signupForm, [name]: value })
	}

	function handleSubmit(e) {
		e.preventDefault()
		fetch("/signup", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				name: signupForm.name,
				username: signupForm.username,
				password: signupForm.password,
				password_confirmation: signupForm.passwordConfirmation,
				has_agreed: signupForm.hasAgreed,
			}),
		}).then((r) => {
			if (r.ok) {
				r.json().then((user) => {
					onSignup(user)
					navigate("/signin")
					setSignupForm(signupObj)
				})
			} else {
				r.json().then((err) => {
					console.log(err)
					setErrors(err.errors)
				})
			}
		})
	}
	return (
		<Container
			style={{
				overflow: "auto",
				height: "120vh",
				width: "70%",
				marginTop: "5%",
				borderStyle: "solid",
				borderColor: "grey",
			}}
		>
			<PageSwitcher />
			<div className="formCenter">
				{errors.map((err) => (
					<Alert variant="danger">{err}</Alert>
				))}
				<form onSubmit={(e) => handleSubmit(e)} className="formFields">
					<div className="formField">
						<label className="formFieldLabel" htmlFor="name">
							<BsPersonFill />
						</label>
						<input
							type="text"
							id="name"
							className="formFieldInput"
							placeholder="Enter first name"
							name="name"
							value={signupForm.name}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className="formField">
						<label className="formFieldLabel" htmlFor="username">
							<BsPersonLinesFill />
						</label>
						<input
							type="text"
							id="username"
							className="formFieldInput"
							placeholder="Enter username"
							name="username"
							required
							value={signupForm.username}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className="formField">
						<label className="formFieldLabel" htmlFor="password">
							<MdPassword />
						</label>
						<input
							type="password"
							id="password"
							className="formFieldInput"
							placeholder="Enter password"
							required
							name="password"
							value={signupForm.password}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className="formField">
						<label className="formFieldLabel" htmlFor="password">
							<MdPassword />
						</label>
						<input
							type="password"
							id="passwordConfirmation"
							className="formFieldInput"
							placeholder="Confirm password"
							name="passwordConfirmation"
							required
							value={signupForm.passwordConfirmation}
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className="formField">
						<label className="formFieldCheckboxLabel">
							<input
								className="formFieldCheckbox"
								type="checkbox"
								name="hasAgreed"
								required
								checked={signupForm.hasAgreed}
								onChange={(e) => handleChange(e)}
							/>{" "}
							I agree all statements in{" "}
							<Link exact to="/disclaimer" className="formFieldTermsLink">
								terms of service
							</Link>
						</label>
					</div>

					<div className="formField">
						<button className="formFieldButton">Sign Up</button>{" "}
						<Link exact to="/signin" className="formFieldLink">
							I'm already member
						</Link>
					</div>
				</form>
			</div>
		</Container>
	)
}

export default Signup
