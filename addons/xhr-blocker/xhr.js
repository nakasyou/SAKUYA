import filter from "./filter.js";

export default function(window,list){
    return class extends window.XMLHttpRequest{
        open(method, url, ...args){
            url=filter(url,list);
            super.open(method,url,...args);
        }
    }
}