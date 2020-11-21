// Correct the names in the Movies array

var compactMovies = movies.map(function (movie, i) {
  return {
    id: i + 1,
    title: movie.Title.toString(),
    year: movie.movie_year,
    categories: movie.Categories.split('|').join(', '),
    summary: movie.summary,
    imageUrl: `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
    bigImageUrl: `http://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
    imdbRating: movie.imdb_rating,
    language: movie.language,
    youtubeId: `https://www.youtube.com/watch?v=${movie.ytid}`
  };
});

// Announcing the Form

var elMoviesForm = $_('.js-movies-form');
var elMoviesInput = $_('.js-movies-input');
var elMoviesCategories = $_('.js-movies-categories');
var elMoviesSorts = $_('.js-movies-sorts');

// Announcing the Template

var elMoviesList = $_('.js-movies-list');
var elMoviesTemplate = $_('#movie-template').content;


