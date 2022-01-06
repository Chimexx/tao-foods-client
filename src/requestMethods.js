import axios from "axios";

const BASE_URL = "https://tao-foods.herokuapp.com/api/";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
