"use strict";

import * as model from "./model.js";
import recommendedView from "./Views/recommendedView.js";
import trendingView from "./Views/trendingView.js";
import searchView from "./Views/searchView.js";
import bookmarkView from "./Views/bookmarkView.js";

const controlHome = async function () {
  try {
    trendingView.renderSpinner();
    recommendedView.renderSpinner();

    // Get query
    const query = searchView.getQuery();

    // Send query value to model
    await model.getResults(query);

    // Render results
    if (query.length < 1) {
      trendingView.addTitle("Trending");
      recommendedView.addTitle("Recommended");

      trendingView.render(model.state.trending);
      recommendedView.render(model.state.recommended);
    } else {
      // Clear trending section
      trendingView.clearSection();

      // Change Recommended to new title
      recommendedView.addTitle("Here are your results");

      // Render all titles in recommended section
      recommendedView.render(model.state.search.results);
    }
  } catch (err) {
    console.log(err);
  }
};

const controlBookmark = async function (name, status) {
  const clickedMovie = model.state.recommended.find((el) => {
    return el.title == name;
  });

  model.controlBookmark(clickedMovie, status);
};

const init = function () {
  // Load results on page load
  controlHome();

  // Bookmark functionality
  bookmarkView.addHandlerAddBookmark(controlBookmark);

  // Load results on page from search
  searchView.addHandlerSearch(controlHome);
};

init();
