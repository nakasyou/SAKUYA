export default function(resource,list){
    const request=new Request(resource);
    const url=new URL(request.url);
    for(const black of list.black_url){
        const pattern=new RegExp(black);
        if(url.replace(pattern,"")===""){
            return "https://cdn.jsdelivr.net/npm/package@version/file";
        }
    }
    return url;
}