export default async function({list}){
    const regex_id=new RegExp(list.black_element.id.reduce((a,b)=>{
        if(a===""){
            a+=b;
        }else{
            a+=`|(${b})`
        }
        return a;
    },""));
    console.log(regex_id)
    setInterval(e=>{
        document.querySelectorAll("div").forEach(elem=>{
            console.log()
            if(elem.id.match(regex_id)?.[0]===elem.id){
                const parent=elem.parentElement;
                if(parent.childNodes.length===1){
                    parent.remove();
                }else{
                    elem.remove();
                }
            }
        })
    },100)
    
}