import View from "./View.js";

class TrendingView extends View {
  _parentElement = document.querySelector(".trending__content");
  _errorMessage = "Something went wrong with your search. Please try again!";

  _generateMarkup() {
    // Create new array of each Preview and join them together
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(movie) {
    return `
      <li class="trending__content__movie" style="background-image: url('${
        movie.thumbnail.trending.large
      }')">
            <div class="trending__content__movie__bookmark">
              <img
                src="../assets/icon-bookmark-${
                  movie.isBookmarked ? "full" : "empty"
                }.svg"
                alt="Bookmark icon"
                class="trending__content__movie__bookmark__image"
              />
            </div>

            <div class="trending__content__movie__contents">
              <div class="trending__content__movie__contents__info">
                <time
                  class="trending__content__movie__contents__info__year"
                  datetime="${movie.year}"
                  >${movie.year}</time
                >
                &bull;
                <div class="trending__content__movie__contents__info__type">
                  <img
                    src="assets/icon-category-${movie.category
                      .toLowerCase()
                      .split(" ", 1)}.svg"
                    alt="${movie.category} icon"
                    class="trending__content__movie__contents__info__type__image"
                  />
                  <p class="trending__content__movie__contents__type__text">
                    ${movie.category}
                  </p>
                </div>
                &bull;
                <p class="trending__content__movie__contents__age">${
                  movie.rating
                }</p>
              </div>
              <h3 class="trending__content__movie__contents__title">
                ${movie.title}
              </h3>
            </div>
          </li>
      `;
  }

  carouselize() {
    const gap = 30;

    const carousel = document.querySelector(".carousel");
    const content = document.querySelector(".trending__content");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    next.addEventListener("click", function (e) {
      carousel.scrollBy(width + gap, 0);

      if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
      }

      if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
      }
    });

    prev.addEventListener("click", function (e) {
      carousel.scrollBy(-(width + gap), 0);

      if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
      }

      if (carousel.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
      }
    });

    let width = carousel.offsetWidth;
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
  }
}

export default new TrendingView();
