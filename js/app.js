document.getElementById("timeout").addEventListener("click", ()=> {
    setTimeout(()=> {
        let div = document.createElement("div");
        document.getElementById("timeout-div").appendChild(div);
        div.style.width = "10rem";
        div.style.height = "15rem";
        div.style.backgroundColor = "cyan";
        div.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
    },2000);
})

let a = 0;
let interval = document.getElementById("interval-div");
document.getElementById("interval-start").addEventListener("click", ()=> {
    let intervalId = setInterval(()=> {
        if (a < 600) {
            interval.innerHTML = a +=60;
        }
        else {
            clearInterval(intervalId);
        }
    },6000);
    document.getElementById("interval-stop").addEventListener("click", ()=> {
        clearInterval(intervalId);
    })
})
