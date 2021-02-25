var canvas=new fabric.Canvas("myCanvas");
var blockHeight =30;
var blockWidth =30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockObject = 0;
window.addEventListener("keydown", kd);

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerObject=img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY, left:playerX
        });
        canvas.add(playerObject);
    });
}
function kd(e){
    if(e.keyCode == "70"){
        new_image('hulk_face.png');
        console.log("f");
    }
    if(e.keyCode == "66"){
        new_image('ironman_body.png');
        console.log('b');
    }
    if(e.keyCode == '76'){
        new_image('spiderman_legs.png');
        console.log('l');
    }
    if(e.keyCode == '82'){
        new_image('thor_right_hand.png');
        console.log('r');
    }
    if(e.keyCode == '72'){
        new_image('captain_america_left_hand.png');
        console.log('h');
    }
    if(e.keyCode == '38'){
        up();
        console.log("up");
    }
    if(e.keyCode == '40'){
        down();
        console.log('down');
    }
    if(e.keyCode == '37'){
        left();
        console.log("left");
    }
    if(e.keyCode == '39'){
        right();
        console.log("right");
    }
    if(e.shiftKey == true && e.keyCode==80){
        blockWidth+=10;
        blockHeight+=10;
        document.getElementById("width").textContent = blockWidth;
        document.getElementById("height").textContent = blockHeight;
    }
    if(e.shiftKey == true && e.keyCode==77){
        blockWidth-=10;
        blockHeight-=10;
        document.getElementById("width").textContent = blockWidth;
        document.getElementById("height").textContent = blockHeight;
    }
}
function left(){
    if(playerX>0){
        playerX-=30;
        console.log("block Height = " + blockHeight);
        console.log("When left arrow  is pressed, x = " + playerX + " , y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function up(){
    if(playerY>0){
        playerY-=30;
        console.log("block Height = " + blockHeight);
        console.log("When up arrow is pressed, X = " + playerX + ", Y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(playerX<650){
        playerX+=30;
        console.log("block Height = " + blockHeight);
        console.log("When right arrow is pressed, x = " + playerX + " , y = " + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if(playerY<460){
        playerY+=30;
        console.log("block Height = " + blockHeight);
        console.log("When down arrow is pressed, x=" +playerX + " , y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function new_image(block){
    fabric.Image.fromURL(block, function(img){
        blockObject=img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY, left:playerX
        });
        canvas.add(blockObject);
    });
}