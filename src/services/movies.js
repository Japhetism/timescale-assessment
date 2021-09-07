import Communication from "./communication";
import config from "../config";

const MovieService = {

    getRecentMovies() {
        const url = `${config.baseUrl}${config.endpoints.recentMovies}?api_key=${config.apiKey}&language=${config.lang}`;
        return Communication.getMethod(url);
    }
}

export default MovieService;