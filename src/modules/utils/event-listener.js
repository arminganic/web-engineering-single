let addWindowListener = () => {
    const content = document.querySelector('main');
    const sidebar = document.querySelector('nav');
    content.addEventListener('scroll', () => {
        addScrollListener(content, sidebar);
    });
}

let addScrollListener = (content, sidebar) => {
    if (content.scrollTop > 75) {
        sidebar.classList.add('nav--on-scroll');
    } else {
        sidebar.classList.remove('nav--on-scroll');
    }
}

export {addWindowListener};
