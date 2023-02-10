export default async function({list}){
    setInterval(e=>{
        const selector=list.black_element.join(" , ");
        return
        document.querySelectorAll(selector).forEach(elem => {
            elem.remove();
        });
    },100)
    
}