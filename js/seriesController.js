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
      seriesView.render(model.state.series);
    } else {
      seriesView.render(model.state.search.series);
    }
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  // Load results on page without search
  controlSeries();

  // Load results on page with search
  searchView.addHandlerSearch(controlSeries);
};

init();
