import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { BASE_URL} from "../constants/api";

const url = {BASE_URL};

export default function useAxios() {
	const [auth] = useContext(AuthContext);

	const apiClient = axios.create({
		baseURL: url,
	});

	apiClient.interceptors.request.use(function (config) {
		const token = auth.token;
		config.headers.Authorization = token ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAzMywibmFtZSI6Im15X3VzZXJuYW1lX2lzX3QiLCJlbWFpbCI6Im5ldy5sYXRlc3RAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc3NTA0NDI1fQ.rufxEYYjMPmWiJXOc1ecKAzuKYoclwdLW8sLKz61fUQ` : "";
		return config;
	});

	return apiClient;
}