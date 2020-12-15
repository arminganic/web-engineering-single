import {initIndex} from "./modules/ui/index-ui";
import {addWindowListener} from "./modules/utils/event-listener";
import {initWatchlist} from "./modules/ui/watchlist-ui";

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
