let addWindowListener = () => {
    window.addEventListener('scroll', addScrollListener);
}

let addScrollListener = () => {
    console.log(window.pageYOffset);
    const sidebar = document.querySelector('nav');
    if (window.pageYOffset > 75) {
        sidebar.classList.add('nav--on-scroll');
    } else {
        sidebar.classList.remove('nav--on-scroll');
    }
}

export {addWindowListener};
