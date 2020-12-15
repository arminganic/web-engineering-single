import {addWindowListener} from "./modules/utils/event-listener";
import {initIndex} from "./modules/pages/index-page";
import {initWatchlist} from "./modules/pages/watchlist-page";

const INIT_FUNCTIONS = {
    'page-index': () => {
        initIndex();
    },
    'page-watchlist': () => {
        initWatchlist();
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
