function button() {
    let button = document.getElementById('button');
    let game = document.getElementById('menu-game');
    let atcoder = document.getElementById('menu-atcoder');
    let link = document.getElementById('menu-link');
    if(button.style.backgroundColor==="yellow") {
        button.style.backgroundColor = "";
        button.style.opacity = "";
        game.style.top = "";
        atcoder.style.top = "";
        link.style.top = "";
        game.style.opacity = "";
        atcoder.style.opacity = "";
        link.style.opacity = "";
    }
    else{
        button.style.backgroundColor = "yellow";
        button.style.opacity = "1";
        game.style.top = "150px";
        atcoder.style.top = "300px";
        link.style.top = "450px";
        game.style.opacity = "1";
        atcoder.style.opacity = "1";
        link.style.opacity = "1";
    }
}