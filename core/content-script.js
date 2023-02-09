function loaded(elem){
    return new Promise((resolve)=>{
        if(elem.dataset.loaded){
            resolve();
            return;
        }
        elem.addEventListener("load",e=>{
            resolve();
        });
    });
}
function sendMessage(name){
    return new Promise((resolve)=>{
        chrome.runtime.sendMessage(name,res=>{
            resolve(res);
        })
    })
}
//add main.js
const moduleScript=document.createElement("script");
moduleScript.type="module";
moduleScript.id="SAKUYA-extention"
moduleScript.src=chrome.runtime.getURL("./core/main.js");
const scriptLoaded=loaded(moduleScript);

function appendScript(){
    try{
        document.head.append(moduleScript);
    }catch(e){
        setTimeout(() => {
            appendScript()
        }, 0);
    }
}
appendScript();

(async()=>{
    const [list]=await Promise.all([
        sendMessage("get-list"),
        scriptLoaded
    ]);
    postMessage({
        type:"SAKUYA",
        SAKUYAURL:chrome.runtime.getURL(""),
        list:list,
    }, location.origin)
})()