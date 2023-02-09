import xhr from "./xhr.js";
import fetch from "./fetch.js";

export default async function({window, list}){
    window.XMLHttpRequest=xhr(window);
    window.fetch=fetch(window);
    console.log(list)
}