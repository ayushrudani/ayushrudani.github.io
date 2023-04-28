resetOnNextKey = false;

function display(value) {
    document.getElementById("input").value += value;
}

function calculate() {
    var p = document.getElementById("input").value;
    if (p.includes('sin')) {
        deg = p.slice(4)
        deg = deg.replace(')', '')
        pie = Math.PI;
        deg = deg * pie / 180;
        ans = Math.sin(deg);
        document.getElementById("input").value = ans;
    } else if (p.includes('cos')) {
        deg = p.slice(4)
        deg = deg.replace(')', '')
        pie = Math.PI;
        deg = deg * pie / 180;
        ans = Math.cos(deg);
        document.getElementById("input").value = ans;
    } else if (p.includes('tan')) {
        deg = p.slice(4)
        deg = deg.replace(')', '')
        pie = Math.PI;
        deg = deg * pie / 180;
        ans = Math.tan(deg);
        document.getElementById("input").value = ans;
    } else if (p.includes('log')) {
        deg = p.slice(4)
        deg = deg.replace(')', '')
        ans = Math.log(deg);
        document.getElementById("input").value = ans;
    } else {
        var q = eval(p);
        document.getElementById("input").value = q;
    }
}

function clearScreen() {
    document.getElementById("input").value = "";
}
document.onkeydown = function(event) {
    if (resetOnNextKey) {
        resetOnNextKey = false;
        clearScreen();
    }
    switch (event.key) {
        case '0':
            display('0');
            break;
        case '1':
            display('1');
            break;
        case '2':
            display('2');
            break;
        case '3':
            display('3');
            break;
        case '4':
            display('4');
            break;
        case '5':
            display('5');
            break;
        case '6':
            display('6');
            break;
        case '7':
            display('7');
            break;
        case '8':
            display('8');
            break;
        case '9':
            display('9');
            break;
        case '.':
            display('.');
            break;
        case '+':
            display('+');
            break;
        case 'Backspace':
            clearScreen();
            break;
        case '-':
            display('-');
            break;
        case '*':
            display('*');
            break;
        case '/':
            display('/');
            break;
        case 's':
            display('sin');
            break;
        case 'c':
            display('cos');
            break;
        case 't':
            display('tan');
            break;
        case 'l':
            display('log');
            break;
        case '(':
            display('(');
            break;
        case ')':
            display(')');
            break;
    }
};

pie = Math.PI;

function sinAns() {
    ans = Math.sin(deg)
    return ans;
}
window.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculate();
        resetOnNextKey = true;
    }
});