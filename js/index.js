"use strict";

import * as model from "./model.js";
import recommendedView from "./Views/recommendedView.js";
import trendingView from "./Views/trendingView.js";
import searchView from "./Views/searchView.js";

const controlTrending = async function () {
  try {
    trendingView.renderSpinner();

    await model.getTrending();

    trendingView.render(model.state.trending);
  } catch (err) {
    console.log(err);
  }
};

const controlRecommended = async function () {
  try {
    recommendedView.renderSpinner();

    await model.getRecommended();

    recommendedView.render(model.state.recommended);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlTrending();
  controlRecommended();
};

init();
