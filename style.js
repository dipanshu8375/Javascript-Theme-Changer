const toggle = document.querySelector("#darkmode");
const body = document.querySelector("body")
toggle.addEventListener("click",function(e){
    this.classList.toggle("bi-toggle-on");
    if(this.classList.toggle("bi-toggle-off")){
        body.style.background = "white";
        body.style.color = "Black";

    }
    else{
        body.style.background = "Black";
        body.style.color = "White";
        body.style.transition = "2s";

    }
});
