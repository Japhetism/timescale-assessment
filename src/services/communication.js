import axios from "axios";

const Communication = {
    getMethod(endpoint) {
        return axios.get(endpoint)
            .then((response) => response.data)
            .catch((error) => error.response.data)
    }
};

export default Communication