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