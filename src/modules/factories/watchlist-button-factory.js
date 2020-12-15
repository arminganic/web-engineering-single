import {isInWatchlist, toggleWatchlist} from "../service/watchlist-service";

let createWatchlistButtonUI = (movie, foo, fullWidth = false) => {
    const buttonUI = document.createElement('button');
    buttonUI.classList.add('btn');
    if (fullWidth) {
        buttonUI.classList.add('btn--100');
        buttonUI.classList.add('btn--center');
    }
    buttonUI.classList.add('btn--danger');

    const iconUI = document.createElement('em');
    iconUI.classList.add('material-icons-outlined');
    iconUI.textContent = 'remove';

    refreshButtonContentUI(buttonUI, iconUI, movie);
    buttonUI.addEventListener('click', () => {
        toggleWatchlist(movie);
        refreshButtonContentUI(buttonUI, iconUI, movie);
        foo();
    });

    const buttonTitleUI = document.createElement('span');
    buttonTitleUI.textContent = 'Watchlist';

    buttonUI.appendChild(iconUI);
    buttonUI.appendChild(buttonTitleUI);

    return buttonUI;
}

let refreshButtonContentUI = (buttonUI, iconUI, movie) => {
    const movieInWatchlist = isInWatchlist(movie);
    if (movieInWatchlist) {
        iconUI.textContent = 'remove';
        buttonUI.classList.add('btn--danger');
    } else {
        iconUI.textContent = 'add';
        buttonUI.classList.remove('btn--danger');
    }
}

export {createWatchlistButtonUI};
