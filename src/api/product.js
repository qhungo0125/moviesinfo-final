import axiosClient from "./axiosClient";

const product = {
  get250Movies: () => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/250movies.json"
        : `/Top250Movies/${import.meta.env.VITE_API_KEY}`;
    return axiosClient.get(url);
  },
  getInTheater: () => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/Intheaters.json"
        : `/InTheaters/${import.meta.env.VITE_API_KEY}`;
    return axiosClient.get(url);
  },
  getMostPopular: () => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/MostPopular.json"
        : `/MostPopularMovies/${import.meta.env.VITE_API_KEY}`;
    return axiosClient.get(url);
  },
  getSearchFilm: (filmName) => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/search_batman.json"
        : `/SearchTitle/${import.meta.env.VITE_API_KEY}/${filmName}`;

    return axiosClient.get(url);
  },
  getSearchActors: (actorName) => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/SearchJeanReno.json"
        : `/SearchName/${import.meta.env.VITE_API_KEY}/${actorName}`;

    return axiosClient.get(url);
  },
  getFilmById: (id) => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/FilmFullType.json"
        : `/Title/${import.meta.env.VITE_API_KEY}/${id}`;

    return axiosClient.get(url);
  },
  getProfileById: (id) => {
    let url =
      import.meta.env.VITE_API_KEY === "false"
        ? "/search_Jamie Lee Curtis.json"
        : `/Name/${import.meta.env.VITE_API_KEY}/${id}`;
    console.log(`/Name/${import.meta.env.VITE_API_KEY}/${id}`);
    return axiosClient.get(url);
  },
};

export default product;
