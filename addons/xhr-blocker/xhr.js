export default function(window){
    return class extends window.XMLHttpRequest{
        open(...args){
            const url=args[1];
            console.log(url);
            super.open(...args);
        }
    }
}