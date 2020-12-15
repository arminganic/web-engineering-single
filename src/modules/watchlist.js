let toggleWatchlist = (movie) => {
    const watchlist = getWatchlist();
    const index = watchlist.indexOf(movie.title);
    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(movie.title);
    }
    saveWatchlist(watchlist);
}

let isInWatchlist = (movie) => {
    const watchlist = getWatchlist();
    const index = watchlist.indexOf(movie.title);
    return index > -1;
}

let getWatchlist = () => {
    return JSON.parse(localStorage.getItem('watchlist')) ?? [];
}

let saveWatchlist = (watchlist) => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

export {toggleWatchlist, isInWatchlist};
