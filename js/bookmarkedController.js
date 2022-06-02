"use strict";

import * as model from "./model.js";
import moviesView from "./Views/moviesView.js";
import seriesView from "./Views/seriesView.js";
import searchView from "./Views/searchView.js";
import bookmarkView from "./Views/bookmarkView.js";

const controlBookmarks = async function (name) {
  try {
    //   Render spinner
    moviesView.renderSpinner();
    seriesView.renderSpinner();

    // Get query
    const query = searchView.getQuery();

    // Search based on query
    await model.searchForBookmarked(query);

    // Render data
    if (query.length < 1) {
      moviesView.addTitle("Bookmarked Movies");
      seriesView.addTitle("Bookmarked TV Series");

      moviesView.render(model.state.bookmarks.movies);
      seriesView.render(model.state.bookmarks.series);
    } else {
      moviesView.clearSection();
      seriesView.clearSection();

      moviesView.addTitle("Here are all of your bookmarks");

      moviesView.render(model.state.bookmarks.results);
    }
  } catch (err) {
    console.log(err);
  }
};

const controlBookmark = async function (name) {
  const clickedMovie = model.state.bookmarks.results.find((el) => {
    return el.title === name;
  });

  model.controlBookmark(name);
};

const init = function () {
  // Load results on page load
  controlBookmarks();

  bookmarkView.addHandlerAddBookmark(controlBookmark);

  // Load results on page from search
  searchView.addHandlerSearch(controlBookmarks);
};

init();
