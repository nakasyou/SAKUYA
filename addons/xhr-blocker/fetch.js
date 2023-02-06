export default function(window){
    const fetch=window.fetch;
    return function(url){
        return fetch(url);
    }
}