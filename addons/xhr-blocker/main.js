import xhr from "./xhr.js";

export default async function({window}){
    window.XMLHttpRequest=xhr(window);
}