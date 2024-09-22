

const footer = document.getElementsByTagName('footer')[0];
const footerProjectBreadcrumbs = footer.getElementsByClassName('project-breadcrumbs')[0];
window.addEventListener('scroll', () => {
    if(scrollY >= window.innerHeight * 0.3) {
        footerProjectBreadcrumbs ? footerProjectBreadcrumbs.classList.remove('project-breadcrumbs-hidden') : null;
        if(footer.classList.contains('footer-home')) {
            footer.classList.remove('footer-hidden');
        }
    } else {
        footerProjectBreadcrumbs ? footerProjectBreadcrumbs.classList.add('project-breadcrumbs-hidden'): null;
        if(footer.classList.contains('footer-home')) {
            footer.classList.add('footer-hidden');
        }
    }
});
window.addEventListener('resize', () => {
});
window.addEventListener('load', () => {
});