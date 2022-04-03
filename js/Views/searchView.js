import View from "./View.js";

class SearchView extends View {
  _parentElement = document.querySelector(".search");
  _errorMessage = "Something went wrong. Please try again!";

  getQuery = function () {
    const query = document.querySelector(".search__bar").value;
    this._clearInput();
    return query;
  };

  _clearInput() {
    this._parentElement.querySelector(".search__bar").value = "";
  }

  addHandlerSearch(handler) {
    document.querySelector(".search").addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
