INIT_FUNCTIONS = {
    index: () => console.log("Hello from the NS side")
}

const app = (() => {
    'use strict';

    const initSpecificPage = () => {
        const bodyId = document.body.id;
        INIT_FUNCTIONS[bodyId]();
    }

    return {
        init: initSpecificPage,
    }
})();

app.init();
