import xhr from "./xhr.js";
import fetch from "./fetch.js";

export default async function({window}){
    window.XMLHttpRequest=xhr(window);
    window.fetch=fetch(window);
}