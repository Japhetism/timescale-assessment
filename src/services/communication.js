import axios from "axios";
import config from "../config";

const Communication = {
    getMethod(endpoint) {
        return axios.get(endpoint)
            .then((response) => response.data)
    }
};

export default Communication