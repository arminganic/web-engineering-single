import {getWatchlist} from "../service/watchlist-service";
import {createWatchlistUI} from "../factories/watchlist-factory";

let initWatchlist = () => {
    const watchlistUI = document.getElementById('watchlist');
    const watchlist = getWatchlist();
    watchlist.forEach(movie => {
        createWatchlistUI(movie, watchlistUI);
    });
    addFilterFunction(watchlistUI, watchlist);
}

let addFilterFunction = (containerUI, watchlist) => {
    const filterUI = document.getElementById('watchlist-filter');
    filterUI.addEventListener('keyup', (event) => {
        const input = (event.target.value).toLowerCase();
        const filteredWatchlist = watchlist
            .filter(m => (m.title).toLowerCase().includes(input))
            .map(m => `movie-${m.id}`);
        const watchlistItems = containerUI.children;

        for (let item of watchlistItems) {
            if (!filteredWatchlist.includes(item.id)) {
                item.classList.add('list__item--hide');
            } else {
                item.classList.remove('list__item--hide');
            }
        }
    });
}

export {initWatchlist};
