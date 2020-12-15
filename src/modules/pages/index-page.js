import {createMovieUI} from "../factories/movie-factory";

let initIndex = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0f2fb5bb9dd4392d617cd67097866357`)
        .then(response => response.json())
        .then(response => response.results)
        .then(movies => {
            const moviesUI = document.getElementById('popular-movies');
            movies.forEach(movie => createMovieUI(movie, moviesUI));
        });
}

export {initIndex};
