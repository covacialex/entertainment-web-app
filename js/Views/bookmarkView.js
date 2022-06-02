import View from "./View.js";

class BookmarkView extends View {
  _parentElement = document.querySelector(".main");
  _errorMessage = "Something went wrong. Please try again!";

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".movies__content__movie__main__bookmark");
      if (!btn) return;

      const btnName = e.target.closest(".movies__content__movie__main")
        .nextElementSibling.lastElementChild.innerHTML;
      if (!btnName) return;

      const btnImg = btn.querySelector(
        ".movies__content__movie__bookmark__image"
      );
      if (!btnImg) return;

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

export default new BookmarkView();
