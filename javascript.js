function num() {
    return Math.floor(Math.random()*4)
}

document.getElementById("button1").addEventListener("click", function(){
    let bndmbr = num();
    if (bndmbr === 0) {
        document.getElementById("kyle").style.display = "block";
    } if (bndmbr === 1) {
        document.getElementById("pookie").style.display = "block";
    } if (bndmbr === 2) {
        document.getElementById("paul").style.display = "block";
    } if (bndmbr === 3) {
        document.getElementById("rob").style.display = "block";
    }
})

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("kyle").style.display = "none";
    document.getElementById("pookie").style.display = "none";
    document.getElementById("rob").style.display = "none";
    document.getElementById("paul").style.display = "none";
})