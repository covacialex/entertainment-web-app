import { getJSON } from "./helpers.js";
import { API_URL } from "./helpers.js";

export const state = {
  search: {
    series: [],
    movies: [],
  },
  trending: [],
  recommended: [],
  movies: [],
  series: [],
};

// Get trending with fetch
export const getTrending = async function () {
  try {
    const data = await getJSON(API_URL).then((data) => {
      const filteredArray = data.filter((num) => {
        //   Filter results and return only trending
        return num.isTrending;
      });

      //   Store results in state.
      state.trending = filteredArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchMovie = async function (movieName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      const filteredArray = data.filter((num) => {
        //   Filter results and return only titles which include passed argument from search bar
        return (
          num.title.toLowerCase().includes(movieName) && num.category == "Movie"
        );
      });
      console.log(filteredArray);
      //   Store results in state.
      state.results = filteredArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const getRecommended = async function () {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter results and skip trending movies
      const filteredArray = data.filter((num) => {
        return num.isTrending == false;
      });

      //   Store results in state.
      state.recommended = filteredArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovies = async function () {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter results and get only movies
      const filteredArray = data.filter((num) => {
        return num.category == "Movie";
      });

      //   Store results in state.
      state.movies = filteredArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSeries = async function (seriesName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter results and get only TV Series
      const filteredArray = data.filter((num) => {
        return num.category == "TV Series";
      });

      //   Store results in state.
      state.series = filteredArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchForSeries = async function (seriesName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter results and get only TV Series
      const filteredArray = data.filter((num) => {
        return num.category == "TV Series";
      });

      //   Filter filtered results and get only movies with search bar value
      const filteredSearchArray = filteredArray.filter((num) =>
        num.title.toLowerCase().includes(seriesName)
      );

      //   Store results in state.
      state.series = filteredArray;
      state.search.series = filteredSearchArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchForMovies = async function (movieName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter results and get only movies
      const filteredArray = data.filter((num) => {
        return num.category == "Movie";
      });
      //   Filter filtered results and get only movies with search bar value
      const filteredSearchArray = filteredArray.filter((num) =>
        num.title.toLowerCase().includes(movieName)
      );

      //   Store results in state.
      state.movies = filteredArray;
      state.search.movies = filteredSearchArray;
    });
  } catch (err) {
    console.log(err);
  }
};
