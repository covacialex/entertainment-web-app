import * as movies from "../data.json" assert { type: "json" };

// Raw JSON file
const json = movies.default;

export const state = {
  search: {
    results: [],
    series: [],
    movies: [],
  },
  trending: [],
  recommended: [],
  movies: [],
  series: [],
};

export const searchForSeries = async function (seriesName) {
  try {
    const data = json;

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
  } catch (err) {
    console.log(err);
  }
};

export const searchForMovies = async function (movieName) {
  try {
    const data = json;

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
  } catch (err) {
    console.log(err);
  }
};

export const getResults = async function (name) {
  try {
    const data = json;

    const trendingArray = data.filter((num) => {
      //   Filter results and return only trending
      return num.isTrending;
    });

    const recommendedArray = data.filter((num) => {
      //   Filter results and return only trending
      return num.isTrending == false;
    });

    const searchArray = data.filter((num) =>
      //   Filter results and return only title including passed in value from search bar
      num.title.toLowerCase().includes(name)
    );

    //   Store results in state.
    state.trending = trendingArray;
    state.recommended = recommendedArray;
    state.search.results = searchArray;
  } catch (err) {
    console.log(err);
  }
};

// Fetch method if data comes from an API and not a local file
/*
export const getResults = async function (name) {
    try {
        // Import "getJSON" from "js/helpers.js" and add "await getJSON(API_URL).then((data) => {" instead of "json" after data and "});" after stored results

      const data = await getJSON(API_URL).then((data) => {
        const trendingArray = data.filter((num) => {
          //   Filter results and return only trending
          return num.isTrending;
        });
  
        const recommendedArray = data.filter((num) => {
          //   Filter results and return only trending
          return num.isTrending == false;
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
*/
