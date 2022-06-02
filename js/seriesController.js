"use strict";

import * as model from "./model.js";
import seriesView from "./Views/seriesView.js";
import searchView from "./Views/searchView.js";

const controlSeries = async function () {
  try {
    //   Render spinner
    seriesView.renderSpinner();

    // Get query
    const query = searchView.getQuery();

    // Search based on query
    await model.searchForSeries(query);

    // Render data
    if (query.length < 1) {
      seriesView.addTitle("TV Series");

      seriesView.render(model.state.series);
    } else {
      seriesView.addTitle("Here are your TV Series results");

      seriesView.render(model.state.search.series);
    }
  } catch (err) {
    console.log(err);
  }
};

const controlBookmark = async function (name, status) {
  const clickedMovie = model.state.series.find((el) => {
    return el.title == name;
  });

  model.controlBookmark(clickedMovie, status);
};

const init = function () {
  // Load results on page load
  controlSeries();

  seriesView.addHandlerAddBookmark(controlBookmark);

  // Load results on page from search
  searchView.addHandlerSearch(controlSeries);
};

init();
