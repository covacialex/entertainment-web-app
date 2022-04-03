export default class View {
  _data;
  render(data) {
    //   Check if data is an array and it's longer than 0
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    // Set private _data to data from function argument
    this._data = data;

    // Generate markup

    const markup = this._generateMarkup();

    // Clear parent element
    this._clear();

    // Insert markup as first child to parent element
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
          <p class="loading__text">Fetching results</p>
    `;

    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
       <div class="message">
         <p>${message}</p>
       </div>
      `;

    console.error(message);
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  getQuery = function () {
    const query = document.querySelector(".search__bar").value;
    this._clearInput();
    return query;
  };
  addHandlerSearch(handler) {
    document.querySelector(".search").addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
