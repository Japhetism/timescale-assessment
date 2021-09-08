const config = {
    baseUrl: process.env.REACT_APP_API_DOMAIN,
    apiKey: process.env.REACT_APP_MOVIE_DB_API_KEY,
    lang: "en-US",
    endpoints: {
      recentMovies: "/movie/upcoming",
      searchMovies: "/search/movie"
    },
};
  
export default config;
