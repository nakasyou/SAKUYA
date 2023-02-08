export default function(window){
    const fetch=window.fetch;
    return function(...args){
        console.log(args[0])
        return fetch(...args);
    }
}