import View from "./View.js";

class RecommendedView extends View {
  _parentElement = document.querySelector(".content");
  _errorMessage = "Something went wrong. Please try again!";

  _generateMarkup() {
    // Create new array of each Preview and join them together
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(movie) {
    return `
    <li class="recommended__content__movie">
    <div class="recommended__content__movie__main"  style="background-image: url('${
      movie.thumbnail.regular.large
    }');">
      <div class="recommended__content__movie__main__bookmark">
        <img
          src="assets/icon-bookmark-${
            movie.isBookmarked ? "full" : "empty"
          }.svg"
          alt=""
          class="recommended__content__movie__bookmark__image"
        />
      </div>
    </div>

    <div class="recommended__content__movie__contents">
      <div class="recommended__content__movie__contents__info">
        <time
          class="recommended__content__movie__contents__info__year"
          datetime="${movie.year}"
          >${movie.year}</time
        >
        &bull;
        <div class="recommended__content__movie__contents__info__type">
          <img
            src="assets/icon-category-${movie.category
              .toLowerCase()
              .split(" ", 1)}.svg"
            alt="${movie.category} icon"
            class="recommended__content__movie__contents__info__type__image"
          />
          <p class="recommended__content__movie__contents__type__text">
          ${movie.category}
          </p>
        </div>
        &bull;
        <p class="recommended__content__movie__contents__age">${
          movie.rating
        }</p>
      </div>
      <h3 class="recommended__content__movie__contents__title">
        ${movie.title}
      </h3>
    </div>
  </li>
      `;
  }
}

export default new RecommendedView();
