"use strict";
var timer = 0; //ゲームタイマー(ms)
var im_screen; //仮想画面
var size = {width:0, height:0};

var map_chip = new Image(); //マップチップ
var player_chip = new Image(); //プレイヤー画像
const MAP_CHIP_SIZE = {row:4, col:4, size:32}; //マップチップの情報(size*sizeの画像が縦にrow個、横にcol個並ぶ)
const PLAYER_CHIP_SIZE = {row:4, col:4, size:32}; //プレイヤー画像の情報(size*sizeの画像が縦にrow個、横にcol個並ぶ)

var map_data = new Array(); //マップデータ(csv)
var map_event = new Array();; //マップイベント(csv)
var player_data = {x:3, y:1, x_delay:0, y_delay:0, ng_delay:0, direction:0}; //プレイヤーの座標
const GAME_SIZE = {width:600, height:400}; //仮想画面サイズ

window.onload = function setup(){
    map_chip.src = "images/tiles.png";
    player_chip.src = "images/man.png";
    im_screen = document.createElement("canvas");
    im_screen.width = GAME_SIZE.width;
    im_screen.height = GAME_SIZE.height;
    resize();
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
        const response = event.target.responseText;
        response.split('\n').forEach(col => {
            map_data.push(col.split(','));
        });
        GAME_SIZE.height = MAP_CHIP_SIZE.size*map_data.length
        GAME_SIZE.width = MAP_CHIP_SIZE.size*map_data[0].length
        console.log(map_data);
    });
    request.open('GET', "files/mapfiles/main.csv", true);
    request.send();
    window.addEventListener("resize", resize);
    window.addEventListener("keydown", player);
    setInterval(loop, 50);
}

function loop(){
    timer += 50;
    console.log("x:"+player_data.x_delay);
    console.log("y:"+player_data.y_delay);
    if(player_data.x_delay < 0){
        player_data.x -= 0.1;
        player_data.x_delay += 1;
    }
    if(player_data.x_delay > 0){
        player_data.x += 0.1;
        player_data.x_delay -= 1;
    }
    if(player_data.y_delay < 0){
        player_data.y -= 0.1;
        player_data.y_delay += 1;
    }
    if(player_data.y_delay > 0){
        player_data.y += 0.1;
        player_data.y_delay -= 1;
    }
    if(player_data.ng_delay > 0){
        player_data.ng_delay -= 1;
    }
    paint();
}

function player(event){
    var key_code = event.keyCode;
    console.log("KEY is caught");
    if(player_data.x_delay == 0 && player_data.y_delay == 0 && player_data.ng_delay == 0){
        player_data.x = Math.round(player_data.x);
        player_data.y = Math.round(player_data.y);//浮動小数点の誤差対策
        if(key_code === 37){//←
            if(player_data.x <= 0){
                player_data.ng_delay = 10;
                player_data.direction = 0;
            }
            else{
                player_data.x_delay = -10;
                player_data.direction = 2;
                console.log("LEFT");
            }
        }
        if(key_code === 38){//↑
            if(player_data.y <= 0){
                player_data.ng_delay = 10;
                player_data.direction = 0;
            }
            else{
                player_data.y_delay = -10;
                player_data.direction = 3;
                console.log("UP");
            }
        }
        if(key_code === 39){//→
            if(player_data.x >= map_data[0].length-1){
                player_data.ng_delay = 10;
                player_data.direction = 0;
            }
            else{
                player_data.x_delay = 10;
                player_data.direction = 1;
                console.log("RIGHT");
            }
        }
        if(key_code === 40){//↓
            if(player_data.y >= map_data.length-1){
                player_data.ng_delay = 10;
                player_data.direction = 0;
            }
            else{
                player_data.y_delay = 10;
                player_data.direction = 0;
                console.log("DOWN");
            }
        }
    }
}

function resize(){
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    size.width = canvas.width;
    size.height = canvas.height;
    if(size.width/GAME_SIZE.width < size.height/GAME_SIZE.height){
        size.height = size.width*GAME_SIZE.height/GAME_SIZE.width;
    }
    else{
        size.width = size.height*GAME_SIZE.width/GAME_SIZE.height;
    }
    context.imageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
}

function paint(){
    const context = im_screen.getContext("2d");
    for(let y = 0; y < map_data.length; y++){
        for(let x = 0; x < map_data[0].length; x++){
            let tile_id = map_data[y][x];
            let map_chip_point = {row:parseInt(tile_id%MAP_CHIP_SIZE.col)*MAP_CHIP_SIZE.size, col:parseInt(tile_id/MAP_CHIP_SIZE.col)*MAP_CHIP_SIZE.size};
            context.drawImage(map_chip, map_chip_point.row, map_chip_point.col, MAP_CHIP_SIZE.size, MAP_CHIP_SIZE.size, x*MAP_CHIP_SIZE.size, y*MAP_CHIP_SIZE.size, MAP_CHIP_SIZE.size, MAP_CHIP_SIZE.size)
        }        
    }
    var player_movement = Math.max(Math.abs(player_data.x_delay), Math.abs(player_data.y_delay));

    if(player_movement > 7)
        player_movement = 1;
    else if(player_movement < 5 && player_movement > 1)
        player_movement = 2;
    else
        player_movement = 0;

    if(player_data.ng_delay > 0){
        if(player_data.ng_delay > 7)
            context.drawImage(player_chip, 3*PLAYER_CHIP_SIZE.size, 1*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, player_data.x*PLAYER_CHIP_SIZE.size, player_data.y*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size)
        else if(player_data.ng_delay > 4)
            context.drawImage(player_chip, 3*PLAYER_CHIP_SIZE.size, 0*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, player_data.x*PLAYER_CHIP_SIZE.size, player_data.y*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size)
        else if(player_data.ng_delay > 1)
            context.drawImage(player_chip, 3*PLAYER_CHIP_SIZE.size, 2*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, player_data.x*PLAYER_CHIP_SIZE.size, player_data.y*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size)
        else
            context.drawImage(player_chip, 3*PLAYER_CHIP_SIZE.size, 0*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, player_data.x*PLAYER_CHIP_SIZE.size, player_data.y*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size)
    }
    else context.drawImage(player_chip, player_movement*PLAYER_CHIP_SIZE.size, player_data.direction*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, player_data.x*PLAYER_CHIP_SIZE.size, player_data.y*PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size, PLAYER_CHIP_SIZE.size)
    
    //context.font = "24px monospace"
    //context.fillText(timer.toString() + "ms", 0, 64);
    printToScreen();
}

function printToScreen(){
    const canvas = document.getElementById("game");
    const context = canvas.getContext("2d");
    context.drawImage(im_screen, 0, 0, im_screen.width, im_screen.height, 0, 0, size.width, size.height);
}