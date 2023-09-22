import axios from "axios";

const url = "https://api.themoviedb.org/3/discover/movie/";

const getMovies = async (page: number) => {
  try {
    const params = {
      params: {
        api_key: "495d98b77df65d47fbf7eba028518ed7",
        include_adult: false,
        language: "fr",
        with_genres: 16, // animation
        page,
      },
    };
    const response = await axios.get(url, params);

    return Promise.resolve(response.data.results);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  getMovies,
};
