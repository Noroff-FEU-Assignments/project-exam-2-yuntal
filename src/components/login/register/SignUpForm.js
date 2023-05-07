import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../../common/FormError.js";
import { BASE_URL, TOKEN_PATH_ } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";


const url = BASE_URL + TOKEN_PATH_;

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().required("Please enter your email"),
	password: yup.string().required("Please enter your password")

});

export default function RegisterForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)} className="my-form-one">
			<img src="images/final-sm(1).png" className="sm-logo" alt="company logo"></img>
				{loginError && <FormError>{loginError}</FormError>}
				<fieldset disabled={submitting}>
				<div>
						<input className="name"  name="name" placeholder="Name*" ref={register} type="name"  />
						{errors.username && <FormError>{errors.name.message}</FormError>}
					</div>
					<div>
						<input className="email-2" name="email" placeholder="Email*" ref={register} type="email" />
						{errors.email && <FormError>{errors.email.message}</FormError>}
					</div>
					<div>
						<input className="avatar-2" name="avatar" placeholder="Avatar url" ref={register} type="avatar" />
						{errors.avatar && <FormError>{errors.avatar.message}</FormError>}
					</div>
					<div>
						<input className="password1" name="password" placeholder="Password*" ref={register} type="password" />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</div>
					<button className="login1">{submitting ? "Joining..." : "Join now"}</button>
				</fieldset>
			</Form>
			<div className="sign-up-now1">
			<Button as={Link} to="/login" className="reg1">Back to login</Button>
				</div>

		</>
	);
}



