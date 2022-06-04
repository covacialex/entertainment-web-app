import { getJSON, API_URL } from "./helpers.js";

export const state = {
  bookmarked: [],
  search: {
    results: [],
    series: [],
    movies: [],
  },
  bookmarks: {
    results: [],
    movies: [],
    series: [],
  },
  trending: [],
  recommended: [],
  movies: [],
  series: [],
};

export const searchForSeries = async function (seriesName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      console.log(data);
      //   Filter results and get only TV Series
      const filteredArray = data.filter((num) => {
        return num.category == "TV Series";
      });

      //   Filter filtered results and get only TV Series with search bar value
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

export const searchForBookmarked = async function (seriesName) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      //   Filter filtered results and get all bookmarked results with search bar value
      const filteredSearchBookmarks = data.filter((num) => {
        return (
          num.title.toLowerCase().includes(seriesName) &&
          num.isBookmarked === true
        );
      });

      //   Filter results and get only bookmarked TV Series
      const filteredSeries = data.filter((num) => {
        return num.category == "TV Series" && num.isBookmarked === true;
      });

      //   Filter results and get only bookmarked movies
      const filteredMovies = data.filter((num) => {
        return num.category == "Movie" && num.isBookmarked === true;
      });

      //   Store results in state.
      state.bookmarks.series = filteredSeries;
      state.bookmarks.movies = filteredMovies;
      state.bookmarks.results = filteredSearchBookmarks;
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

export const getResults = async function (name) {
  try {
    const data = await getJSON(API_URL).then((data) => {
      const trendingArray = data.filter((num) => {
        //   Filter results and return only trending
        return num.isTrending;
      });

      const recommendedArray = data.filter((num, index) => {
        //   Filter results and return only trending
        return !num.isTrending;
      });

      const searchArray = data.filter((num) =>
        //   Filter results and return only title including passed in value from search bar
        num.title.toLowerCase().includes(name)
      );

      //   Store results in state.
      state.trending = trendingArray;
      state.recommended = recommendedArray;
      state.search.results = searchArray;
    });
  } catch (err) {
    console.log(err);
  }
};

export const controlBookmark = async function (title, status) {
  if (status == true) {
    title.isBookmarked = true;
    state.bookmarked.push(title);
  }

  if (status == false) {
    title.isBookmarked = false;
    state.bookmarked.splice(
      state.bookmarked.findIndex((el) => el == title),
      1
    );
  }
};
