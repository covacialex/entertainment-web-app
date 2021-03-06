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

  clearSection() {
    // Selects list
    this._parentElement.innerHTML = "";

    // Selects title
    this._parentElement.previousElementSibling.innerHTML = "";
  }

  addTitle(title) {
    // Selects title
    this._parentElement.previousElementSibling.innerHTML = title;
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".js__bookmark");
      if (!btn) return;
      console.log(btn);

      const btnName =
        e.target.closest(".js__content").nextElementSibling.lastElementChild
          .innerHTML;
      if (!btnName) return;
      console.log(btnName);

      const btnImg = btn.querySelector(".js__image");
      if (!btnImg) return;
      console.log(btnImg);

      // Send movie title and true/false to controller on bookmark toggle
      if (
        btnImg.src == "http://127.0.0.1:5500/assets/icon-bookmark-empty.svg"
      ) {
        btnImg.src = "http://127.0.0.1:5500/assets/icon-bookmark-full.svg";
        handler(btnName, true);
      } else if (
        btnImg.src == "http://127.0.0.1:5500/assets/icon-bookmark-full.svg"
      ) {
        btnImg.src = "http://127.0.0.1:5500/assets/icon-bookmark-empty.svg";
        handler(btnName, false);
      }
    });
  }
}
