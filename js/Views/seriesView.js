import View from "./View.js";

class MoviesView extends View {
  _parentElement = document.querySelector(".series__content");
  _errorMessage = "Something went wrong. Please try again!";

  _generateMarkup() {
    // Create new array of each Preview and join them together
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(movie) {
    return `
    <li class="series__content__movie">
    <div class="series__content__movie__main"  style="background-image: url('${
      movie.thumbnail.regular.large
    }');">
      <div class="series__content__movie__main__bookmark">
        <img
          src="assets/icon-bookmark-empty.svg"
          alt=""
          class="series__content__movie__bookmark__image"
        />
      </div>
    </div>

    <div class="series__content__movie__contents">
      <div class="series__content__movie__contents__info">
        <time
          class="series__content__movie__contents__info__year"
          datetime="${movie.year}"
          >${movie.year}</time
        >
        &bull;
        <div class="series__content__movie__contents__info__type">
          <img
            src="assets/icon-category-${movie.category
              .toLowerCase()
              .split(" ", 1)}.svg"
            alt="${movie.category} icon"
            class="series__content__movie__contents__info__type__image"
          />
          <p class="series__content__movie__contents__type__text">
          ${movie.category}
          </p>
        </div>
        &bull;
        <p class="series__content__movie__contents__age">${movie.rating}</p>
      </div>
      <h3 class="series__content__movie__contents__title">
        ${movie.title}
      </h3>
    </div>
  </li>
      `;
  }
}

export default new MoviesView();
