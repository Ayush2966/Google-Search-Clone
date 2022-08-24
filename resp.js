
let target=document.getElementById("searchme");
console.log(target);

target.addEventListener("keypress", function(e){
    if(e.keyCode===13){
        let url="https://www.google.com/search?q="+target.value;
        window.open(url,"_self")
    }
})

document.getElementById("left").addEventListener("click", function(){
    let url="https://www.google.com/search?q="+target.value;
        window.open(url,"_self")
})
document.getElementById("right").addEventListener("click", function(){
    let url="https://www.google.com/search?q="+target.value;
        window.open(url,"_self")
})