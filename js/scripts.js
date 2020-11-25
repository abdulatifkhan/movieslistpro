// Correct the names in the Movies array

/* var compactMovies = movies.map(function (movie, i) {
  return {
    id: i + 1,
    title: movie.Title.toString(),
    year: movie.movie_year,
    categories: movie.Categories.split('|'),
    summary: movie.summary,
    imdbId: movie.imdb_id,
    imdbRating: movie.imdb_rating,
    runtime: movie.rumtime,
    language: movie.language,
    // trailer: `https://www.youtube.com/watch?v=${movie.ytid}`,
    trailer: getYouTubeVideoLink(movie.ytid),
    // imageUrl: `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
    imageUrl: getYouTubeVideoThumbnail(movie.ytid),
    // bigImageUrl: `http://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`
    bigImageUrl: getYouTubeVideoBigThumbnail(movie.ytid),
  };
}); */

// Announcing the Form

var elMoviesForm = $_('.js-movies-form');
var elMoviesInput = $_('.js-movies-input', elMoviesForm);
var elMoviesRating = $_('.js-movies-rating', elMoviesForm);
var elMoviesCategories = $_('.js-movies-categories', elMoviesForm);
var elMoviesSorts = $_('.js-movies-sorts', elMoviesForm);

// Announcing the Template

var elMoviesList = $_('.js-movies-list');
var elMoviesTemplate = $_('#movie-template').content;

var createMoviesElement = function (compactMovies) {
  var elNewMovie = elMoviesTemplate.cloneNode(true);

  $_('.movie-title', elNewMovie).textContent = compactMovies.title;
  $_('.movie-image', elNewMovie).src = compactMovies.imageUrl;
  $_('.movie-image', elNewMovie).alt = compactMovies.title;
  $_('.movie-year', elNewMovie).textContent = compactMovies.year;
  $_('.movie-categories', elNewMovie).textContent = compactMovies.categories;
  $_('.movie-summary', elNewMovie).textContent = compactMovies.summary;
  $_('.movie-imdb-rating', elNewMovie).textContent = compactMovies.imdbRating;
  $_('.movie-language', elNewMovie).textContent = compactMovies.language;
  $_('.movie-youtube', elNewMovie).href = compactMovies.trailer;

  return elNewMovie;
};

// Announcing the Fragment

var renderMovies = function (compactMovies) {
  elMoviesList.innerHTML = '';

  var elMoviesWrapperFragment = document.createDocumentFragment();

  compactMovies.forEach(function (movie) {
    elMoviesWrapperFragment.appendChild(createMoviesElement(movie));
  });

  elMoviesList.appendChild(elMoviesWrapperFragment);
};

renderMovies(compactMovies.slice(0, 200));

// for (var category of categories)

// Announcing the Form function

var searchMovies = function (evt) {
  evt.preventDefault();

  var searchRegaxValue = elMoviesInput.value.trim();
  var searchRegax = new RegExp(searchRegaxValue, 'gi');
  
  var findMoviesBySearch = compactMovies.filter (function (movie) {
    return movie.title.match(searchRegax);
  });

  renderMovies(findMoviesBySearch);
};

elMoviesForm.addEventListener('submit', searchMovies);