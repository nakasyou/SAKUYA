import xhr from "./xhr.js";
import fetch from "./fetch.js";

export default async function({window, list}){
    console.log(list)
    window.XMLHttpRequest=xhr(window,list);
    window.fetch=fetch(window,list);
}