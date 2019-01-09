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

let button_html = document.createElement("div");
button_html.innerHTML = "<div id=\"button\"onclick=\"button()\">\n" +
    "    <svg width=\"60\" height=\"60\" class=\"octicon octicon-three-bars\" viewBox=\"0 0 12 16\" version=\"1.1\" style=\"position: absolute;top:22px;\" aria-hidden=\"true\">\n" +
    "        <path fill-rule=\"evenodd\" d=\"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z\"></path>\n" +
    "    </svg>\n" +
    "</div>\n" +
    "<div id=\"menu-game\">\n" +
    "    <a href=\"/GameHumen\">\n" +
    "    <svg width=\"60\" height=\"60\" class=\"octicon octicon-keyboard\" viewBox=\"0 0 16 16\" version=\"1.1\" style=\"position: absolute;top:22px;\" aria-hidden=\"true\">\n" +
    "        <path fill-rule=\"evenodd\" d=\"M10 5H9V4h1v1zM3 6H2v1h1V6zm5-2H7v1h1V4zM4 4H2v1h2V4zm8 7h2v-1h-2v1zM8 7h1V6H8v1zm-4 3H2v1h2v-1zm8-6h-1v1h1V4zm2 0h-1v1h1V4zm-2 5h2V6h-2v3zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 0H1v9h14V3zM6 7h1V6H6v1zm0-3H5v1h1V4zM4 7h1V6H4v1zm1 4h6v-1H5v1zm5-4h1V6h-1v1zM3 8H2v1h1V8zm5 0v1h1V8H8zM6 8v1h1V8H6zM5 8H4v1h1V8zm5 1h1V8h-1v1z\"></path>\n" +
    "    </svg></a>\n" +
    "</div>\n" +
    "<div id=\"menu-atcoder\">\n" +
    "    <a href=\"/AtCoderTmp\">\n" +
    "    <svg width=\"60\" height=\"60\" class=\"octicon octicon-file-code\" viewBox=\"0 0 12 16\" version=\"1.1\" style=\"position: absolute;top:22px;\" aria-hidden=\"true\">\n" +
    "        <path fill-rule=\"evenodd\" d=\"M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z\"></path>\n" +
    "    </svg></a>\n" +
    "</div>\n" +
    "<div id=\"menu-link\"onclick=\"button()\">\n" +
    "    <span>準備中</span>\n" +
    "</div>";

document.body.appendChild(button_html);