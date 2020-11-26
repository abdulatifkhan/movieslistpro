// Announcing the Form

var elMoviesForm = $_('.js-movies-form');
var elMoviesInput = $_('.js-movies-input', elMoviesForm);
var elMoviesRating = $_('.js-movies-rating', elMoviesForm);
var elMoviesCategories = $_('.js-movies-categories', elMoviesForm);
var elMoviesSorts = $_('.js-movies-sorts', elMoviesForm);

// Announcing the Template

var elMoviesList = $_('.js-movies-list');
var elMoviesTemplate = $_('#movie-template').content;

var createGenereSelectOptions = function () {
  var movieCategories = [];

  compactMovies.slice(0, 50).forEach(function (movie) {
    movie.categories.forEach(function (category) {
      if (!movieCategories.includes(category)) {
        movieCategories.push(category);
      }
    });
  });

  movieCategories.sort();

  var elOptionsFragment = document.createDocumentFragment();

  movieCategories.forEach(function (category) {
    // var elCategoryOption = document.createElement('option');
    // elCategoryOption.textContent = category;
    var elCategoryOption = createElement('option', '', category);

    elCategoryOption.value = category.toLowerCase();

    elOptionsFragment.appendChild(elCategoryOption);
  });
  
  elMoviesCategories.appendChild(elOptionsFragment);
};

createGenereSelectOptions();

/* 
ES5

elMoviesForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
}); 
*/

var renderResults = function (searchResults) {
  elMoviesList.innerHTML = '';

  var elResultsFragment = document.createDocumentFragment();

  searchResults.forEach((movie) => {
    var elMovie = elMoviesTemplate.cloneNode(true);
    $_('.movie-title', elMovie).textContent = movie.title;
    $_('.movie-image', elMovie).src = movie.imageUrl;
    $_('.movie-image', elMovie).alt = movie.title;
    $_('.movie-year', elMovie).textContent = movie.year;
    $_('.movie-categories', elMovie).textContent = movie.categories;
    $_('.movie-summary', elMovie).textContent = movie.summary;
    $_('.movie-imdb-rating', elMovie).textContent = movie.imdbRating;
    $_('.movie-language', elMovie).textContent = movie.language;
    $_('.movie-youtube', elMovie).href = movie.trailer;


    elResultsFragment.appendChild(elMovie);
  });

  elMoviesList.appendChild(elResultsFragment);
};

// ES6
elMoviesForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  var searchTitle = elMoviesInput.value.trim();
  var movieTitleRegex =  new RegExp(searchTitle, 'gi');

  var searchResults = compactMovies.filter((movie) => {
    return movie.title.match(movieTitleRegex);
  });

  renderResults(searchResults);
});





































// var createMoviesElement = function (compactMovies) {
//   var elNewMovie = elMoviesTemplate.cloneNode(true);

//   $_('.movie-title', elNewMovie).textContent = compactMovies.title;
//   $_('.movie-image', elNewMovie).src = compactMovies.imageUrl;
//   $_('.movie-image', elNewMovie).alt = compactMovies.title;
//   $_('.movie-year', elNewMovie).textContent = compactMovies.year;
//   $_('.movie-categories', elNewMovie).textContent = compactMovies.categories;
//   $_('.movie-summary', elNewMovie).textContent = compactMovies.summary;
//   $_('.movie-imdb-rating', elNewMovie).textContent = compactMovies.imdbRating;
//   $_('.movie-language', elNewMovie).textContent = compactMovies.language;
//   $_('.movie-youtube', elNewMovie).href = compactMovies.trailer;

//   return elNewMovie;
// };

// // Announcing the Fragment

// var renderMovies = function (compactMovies) {
//   elMoviesList.innerHTML = '';

//   var elMoviesWrapperFragment = document.createDocumentFragment();

//   compactMovies.forEach(function (movie) {
//     elMoviesWrapperFragment.appendChild(createMoviesElement(movie));
//   });

//   elMoviesList.appendChild(elMoviesWrapperFragment);
// };

// renderMovies(compactMovies.slice(0, 200));

// // for (var category of categories)

// // Announcing the Form function

// var searchMovies = function (evt) {
//   evt.preventDefault();

//   var searchRegaxValue = elMoviesInput.value.trim();
//   var searchRegax = new RegExp(searchRegaxValue, 'gi');
  
//   var findMoviesBySearch = compactMovies.filter (function (movie) {
//     return movie.title.match(searchRegax);
//   });

//   renderMovies(findMoviesBySearch);
// };

// elMoviesForm.addEventListener('submit', searchMovies);