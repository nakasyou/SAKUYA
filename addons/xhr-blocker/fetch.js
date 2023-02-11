import filter from "./filter.js";

export default function(window,list){
    const fetch=window.fetch;
    return function(resource,...options){
        resource=filter(resource,list);
        return fetch(resource,...options);
    }
}