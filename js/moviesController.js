"use strict";

import * as model from "./model.js";
import moviesView from "./Views/moviesView.js";
import searchView from "./Views/searchView.js";

const controlMovies = async function () {
  try {
    //   Render spinner
    moviesView.renderSpinner();

    // Get query
    const query = searchView.getQuery();

    // Search based on query
    await model.searchForMovies(query);

    // Render data
    if (query.length < 1) {
      moviesView.addTitle("Movies");

      moviesView.render(model.state.movies);
    } else {
      moviesView.addTitle("Here are your Movie results");

      moviesView.render(model.state.search.movies);
    }
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  // Load results on page load
  controlMovies();

  // Load results on page from search
  searchView.addHandlerSearch(controlMovies);
};

init();
