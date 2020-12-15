let toggleWatchlist = (movie) => {
    const watchlist = getWatchlist();
    const index = watchlist.findIndex(m => m.title === movie.title);
    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(movie);
    }
    saveWatchlist(watchlist);
}

let isInWatchlist = (movie) => {
    const watchlist = getWatchlist();
    const index = watchlist.findIndex(m => m.title === movie.title);
    return index > -1;
}

let getWatchlist = () => {
    return JSON.parse(localStorage.getItem('watchlist')) ?? [];
}

let saveWatchlist = (watchlist) => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

export {toggleWatchlist, isInWatchlist, getWatchlist};
