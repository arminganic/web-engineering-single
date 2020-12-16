import {getWatchlist} from "../service/watchlist-service";
import WatchlistFactory from "../factories/watchlist-factory";

let initWatchlist = () => {
    const watchlistUI = document.getElementById('watchlist');
    const watchlistFactory = new WatchlistFactory();
    const watchlist = getWatchlist();

    if (watchlist.length > 0) {
        watchlist.forEach(movie => {
            watchlistUI.appendChild(
                watchlistFactory.createWatchlistUI(movie, () => {
                    const watchlist = getWatchlist();
                    if (watchlist.length === 0) {
                        watchlistUI.appendChild(
                            addInfo(watchlistFactory)
                        );
                    }
                })
            );
        });
    } else {
        watchlistUI.appendChild(
            addInfo(watchlistFactory)
        );
    }
    addFilterFunction(watchlistUI, watchlist);
}

let addInfo = (watchlistFactory) => {
    const filterContainerUI = document.getElementById('watchlist-filter-container');
    filterContainerUI.style.display = 'none';
    return watchlistFactory.createNoItemsInfo()
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
