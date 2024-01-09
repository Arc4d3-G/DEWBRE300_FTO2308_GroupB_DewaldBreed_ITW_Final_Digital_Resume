/**
 * An object literal containing query-selectors of the relevant HTML elements
 */
const html = {
    themeToggleButton: document.querySelector(`[data-theme-toggle]`),
    text: {
        article: document.querySelector('[data-article-div]'),
    },
    div: {
        nav: document.querySelector('[data-nav-div]'),
        header: document.querySelector('[data-header-div]'),
        skills: document.querySelector('[data-skills-div]'),
        footer: document.querySelector('[data-footer-div]'),
    },
    borders: {
        hr_1: document.querySelector('[data-article-hr1]'),
        hr_2: document.querySelector('[data-article-hr2]'),
        vl_1: document.querySelector('[data-article-vl1]'),
        vl_2: document.querySelector('[data-article-vl2]'),
    },
    icons: {
        article: {
            pen: document.querySelector('[data-article-pen]'),
            book: document.querySelector('[data-article-book]')
        }
    },
}

/**
 * Function that toggles relevant css classes for dark mode theme
 */
const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode-body")
    html.text.article.classList.toggle("dark-mode-font")
    html.div.nav.classList.toggle("dark-mode-nav")
    html.div.header.classList.toggle("dark-mode-hero")
    html.div.skills.classList.toggle("dark-mode-skills")
    html.div.footer.classList.toggle("dark-mode-footer")
    html.borders.hr_1.classList.toggle("dark-mode-hr")
    html.borders.hr_2.classList.toggle("dark-mode-hr")
    html.borders.vl_1.classList.toggle("dark-mode-vl")
    html.borders.vl_2.classList.toggle("dark-mode-vl")
    html.icons.article.pen.classList.toggle("dark-mode-pen")
    html.icons.article.book.classList.toggle("dark-mode-book")
}

html.themeToggleButton.addEventListener('click', handleThemeToggle)

