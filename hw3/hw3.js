var screen = document.body;

var sio = 0;
var state = 0;
var in_bag = 0;

var brush_taken = 0;
var shove_taken = 0;

var brush = document.getElementsByClassName("brush")[0];
var bag = document.getElementsByClassName("bag")[0];
var shove = document.getElementsByClassName("shove")[0];

var yamas = document.getElementsByClassName("yama")[0];
var bags = document.getElementById("bags");
var sios = document.getElementsByClassName("sio")[0];

var start = document.getElementById("start_icon");
var restart = document.getElementById("restart_icon");
var intro = document.getElementById("intro_icon");

start.onclick = function () {
    this.style.display = 'none';
    document.getElementById("cover").style.display = 'none';
};

restart.onclick = function () {
    screen.style.cursor = "auto";
    sio = 0;
    state = 0;
    in_bag = 0;
    brush_taken = 0;
    shove_taken = 0;
    changeBags();
    changeYamas();
    changeSios();
    show();
};

intro.onclick = function () {
    alert("~~一起來體驗曬鹽的過程吧!!~~\n操作說明:\n1.使用鹽刷在鹽田中堆出鹽堆\n2.使用鏟子把鹽放到竹簍中\n3.當竹簍裝滿時點選竹簍圖示把鹽搬到鹽山\n\nWeb:NCKU 林凱尉  Image:NCKU 鄭翔升");
}

brush.onclick = function () {
    screen.style.cursor = "url(res/tool/brush_128px.png) 64 64,url(res/tool/brush_32px.png) 16 16, crosshair";
    brush_taken = 1;
    shove_taken = 0;
}

shove.onclick = function () {
    screen.style.cursor = "url(res/tool/shove_128px.png) 64 64,url(res/tool/shove_32px.png) 16 16, wait";
    brush_taken = 0;
    shove_taken = 1;
}

bag.onclick = function () {
    screen.style.cursor = "auto";
    brush_taken = 0;
    shove_taken = 0;
    if (in_bag >= 5) state++ , in_bag -= 5;
    changeBags();
    changeYamas();
    show();
}

sios.onclick = function () {
    if (brush_taken == 1 && sio < 5) {
        sio++;
        changeSios();
        show();
    }
    else if (shove_taken == 1 && sio > 0) {
        in_bag++ , sio--;
        changeBags();
        changeSios();
        show();
    }
    else;
}

screen.onmousedown = function () {
    if (brush_taken == 1) screen.style.cursor = "url(res/tool/brush_128px.png) 70 64,url(res/tool/brush_32px.png) 20 16, crosshair";
    else if (shove_taken == 1) screen.style.cursor = "url(res/tool/shove_128px.png) 70 64,url(res/tool/shove_32px.png) 20 16, wait";
    else;
}

screen.onmouseup = function () {
    if (brush_taken == 1) screen.style.cursor = "url(res/tool/brush_128px.png) 64 64,url(res/tool/brush_32px.png) 16 16, crosshair";
    else if (shove_taken == 1) screen.style.cursor = "url(res/tool/shove_128px.png) 64 64,url(res/tool/shove_32px.png) 16 16, wait";
    else;
}

function show() {
    document.getElementById("show").innerHTML = "sio=" + sio + "\nin_bag=" + in_bag + "\nstate=" + state;
}

function changeBags() {
    if (in_bag == 0) bags.setAttribute("src", "res/process/bag_0.png");
    else if (in_bag == 1) bags.setAttribute("src", "res/process/bag_1.png");
    else if (in_bag == 2) bags.setAttribute("src", "res/process/bag_2.png");
    else if (in_bag == 3) bags.setAttribute("src", "res/process/bag_3.png");
    else if (in_bag >= 4) bags.setAttribute("src", "res/process/bag_4.png");
    else;
}

function changeYamas() {
    if (state == 0) yamas.setAttribute("src", "res/process/yama_0.png");
    else if (state == 1) yamas.setAttribute("src", "res/process/yama_1.png");
    else if (state == 2) yamas.setAttribute("src", "res/process/yama_2.png");
    else if (state == 3) yamas.setAttribute("src", "res/process/yama_3.png");
    else if (state == 4) yamas.setAttribute("src", "res/process/yama_4.png");
    else if (state >= 5) yamas.setAttribute("src", "res/process/yama_5.png");
    else;
}

function changeSios() {
    if (sio == 0) sios.setAttribute("src", "res/process/sio_0.png");
    else if (sio == 1) sios.setAttribute("src", "res/process/sio_1.png");
    else if (sio == 2) sios.setAttribute("src", "res/process/sio_2.png");
    else if (sio == 3) sios.setAttribute("src", "res/process/sio_3.png");
    else if (sio == 4) sios.setAttribute("src", "res/process/sio_4.png");
    else if (sio >= 5) sios.setAttribute("src", "res/process/sio_5.png");
    else;
}

function imgdragstart() { return false; }

for (i in document.images) document.images[i].ondragstart = imgdragstart;