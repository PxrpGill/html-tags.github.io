import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags.github.io/",
    plugins: [
        Inspect(),
        createHtmlPlugin({
            title: "Index_Page",
            template: "../index.html",
            minify: true,
        }),
        createHtmlPlugin({
            title: "W3C",
            template: "../w3c/w3c_page.html",
            minify: true,
        }),
        createHtmlPlugin({
            title: "Just Page",
            template: "../just_page/just_page.html",
            minify: true
        }),
    ],
}; 