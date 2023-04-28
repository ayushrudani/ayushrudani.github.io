flag = 1;

document.onkeydown = function(event) {
    if (flag == 1) {
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                up();
                break;
            case 'a':
            case 'ArrowLeft':
                left();
                break;
            case 'd':
            case 'ArrowRight':
                right();
                break;
            case 's':
            case 'ArrowDown':
                down();
                break;
        }
    }
}
top1 = 300;
left1 = 200;
itop = 0;
idown = 0;
ileft = 0;
iright = 0;
y = 250;
x = 150;
score = 0;
life = 3;
k = 0;

function down() {
    clearInterval(ileft);
    clearInterval(itop);
    clearInterval(iright);
    idown = setInterval(goDown, 10);
}

function goDown() {
    checkForScore()
    s = document.getElementById('snake');
    top1 += 1;
    left1 += 1;
    if (top1 > 552) {
        life_m();
        clearInterval(idown);
        clearInterval(ileft);
        clearInterval(itop);
        clearInterval(iright);
    }
    s.style.top = top1 + "px";
}

function right() {
    clearInterval(ileft);
    clearInterval(itop);
    clearInterval(idown);
    iright = setInterval(goRight, 10);
}

function goRight() {
    checkForScore()
    s = document.getElementById('snake');
    left1 += 1;
    if (left1 > 552) {
        life_m();
        k++;
        clearInterval(iright);
        clearInterval(ileft);
        clearInterval(itop);
        clearInterval(idown);
    }
    s.style.left = left1 + "px";
}

function left() {
    clearInterval(iright);
    clearInterval(itop);
    clearInterval(idown);
    ileft = setInterval(goLeft, 10);
}

function goLeft() {
    checkForScore()
    s = document.getElementById('snake');
    left1 -= 1;
    if (left1 < 0) {
        life_m();
        clearInterval(ileft);
        clearInterval(iright);
        clearInterval(itop);
        clearInterval(idown);
    }
    s.style.left = left1 + "px";
}

function up() {
    clearInterval(iright);
    clearInterval(ileft);
    clearInterval(idown);
    itop = setInterval(goUp, 10);
}

function goUp() {
    checkForScore()
    s = document.getElementById('snake');
    top1 -= 1;
    if (top1 < 0) {
        life_m();
        clearInterval(itop);
        clearInterval(iright);
        clearInterval(ileft);
        clearInterval(idown);
    }
    s.style.top = top1 + "px";
}

function food() {
    x = parseInt(Math.random() * (540));
    y = parseInt(Math.random() * (540));
    document.getElementById("point").style.left = x + "px";
    document.getElementById("point").style.top = y + "px";
    score++;
    document.getElementById("score").innerHTML = score;
}

function life_m() {
    const children = document.getElementById('life').children;
    const firstChild = children.item(k);
    firstChild.style.color = "#fff";
    document.getElementById('snake').style.left = 200 + "px";
    top1 = 300;
    left1 = 200;
    life--;
    k++;
    if (life == 0) {
        document.getElementById("over").style.display = "block";
        flag = 0;
    }
}

function checkForScore() {
    if (x - 8 < left1 && x + 8 > left1 && y - 8 < top1 && y + 8 > top1) {
        food();
    }
}
document.getElementById('again').addEventListener('click', function() {
    document.location.reload(true)
})        


//120 DEFF IN LEFT