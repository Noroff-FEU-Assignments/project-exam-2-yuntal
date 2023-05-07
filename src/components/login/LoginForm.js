import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import { Link } from 'react-router-dom'
import { Button, Col} from "react-bootstrap";



const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	email: yup.string().required("Please enter your email"),
	password: yup.string().required("Please enter your password")
});

export default function LoginForm() {
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
			history.push("/PostFeed");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<>
<Col>
            <form onSubmit={handleSubmit(onSubmit)} className="my-form">
			<img src="images/final-sm(1).png" className="sm-logo-1" alt="company logo"></img>
				{loginError && <FormError>{loginError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<input className="email" name="email" placeholder="Email*" ref={register} />
						{errors.username && <FormError>{errors.email.message}</FormError>}
					</div>
					<div>
						<input className="password" name="password" placeholder="Password*" ref={register} type="password" />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</div>
					<button className="login">{submitting ? "Loggin in..." : "Login"}</button>
				</fieldset>
			</form>
			<div className="sign-up-now">
				<Button as={Link} to="/register" className="reg">Sign up</Button>
            </div>
			</Col>
		</>
	);
}
