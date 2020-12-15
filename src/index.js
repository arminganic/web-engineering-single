import {createMovieUI} from "./modules/movie-ui";
import {addWindowListener} from "./modules/window-listener";

const INIT_FUNCTIONS = {
    index: () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0f2fb5bb9dd4392d617cd67097866357`)
            .then(response => response.json())
            .then(response => response.results)
            .then(movies => {
                const moviesUI = document.getElementById('popular-movies');
                movies.forEach(movie => createMovieUI(movie, moviesUI));
            });
    }
}

const app = (() => {
    'use strict';

    const initSpecificPage = () => {
        const bodyId = document.body.id;
        INIT_FUNCTIONS[bodyId]();
    }

    const initWindowListener = () => {
        addWindowListener();
    }

    return {
        init: initSpecificPage,
        initWindowListener: initWindowListener,
    }
})();

app.initWindowListener();
app.init();
