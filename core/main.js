window.addEventListener("message",async(e)=> {
    if(e.data.type!=="SAKUYA") return;

    const {data}=e;

    console.log("SAKUYA Starting...");
    const SAKUYA={};

    SAKUYA.getURL=text=>data.SAKUYAURL+text;
    SAKUYA.window=window;
    SAKUYA.list=data.list;

    const addonsFetch=await fetch(SAKUYA.getURL("../addons/addons.json"));
    const addonsData=await addonsFetch.json();
    for(const addonName of addonsData.addons){
        if(addonName.slice(0,2)==="//")
            continue;
        
        import(SAKUYA.getURL(`../addons/${addonName}`))
            .then(module=>{
                module.default(SAKUYA);
            })
    }
}, false);