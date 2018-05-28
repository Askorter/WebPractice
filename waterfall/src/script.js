var num = 1;

window.onload = function() {
    var ul = this.document.getElementsByTagName('ul');
    for (var i = 0; i < 20; i++) {
        fall();
    }
}

function createLi(ul) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    if (num > 301) {
        return;
    }
    img.src = "src/30/" + num + ".jpg"; //这里的路径改为图片文件夹的路径，图片的命名需要为有规律的名字
    img.style.width = "100%";
    num++;
    li.appendChild(img);
    //li.style.height = rand() + "px";
    //li.style.backgroundColor = chooseColor();
    ul.appendChild(li);
}

function rand() {
    return parseInt(Math.random() * 300) + 100;
}

function chooseColor() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function judgeHeight() {
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var offsetHeight = document.documentElement.offsetHeight;
    if (offsetHeight <= clientHeight + scrollTop + 200) {
        return true;
    } else {
        return false;
    }
}

function minHeight(ulh) {
    console.log(ulh.length);
    var min = Infinity;
    var index = 0;
    for (let i = 0; i < ulh.length; i++) {
        console.log(ulh[i]);
        if (ulh[i] < min) {
            min = ulh[i];
            index = i;
        }
    }
    return index;
}

function fall() {
    var ul = this.document.getElementsByTagName('ul');
    var ulHeight = [];
    for (let i = 0; i < 4; i++) {
        if (ul[i].offsetHeight == undefined) {
            ulHeight.push(0);
        } else {
            ulHeight.push(ul[i].offsetHeight);
        }
    }
    var index = minHeight(ulHeight);
    createLi(ul[index]);

}

window.onscroll = function() {
    var b = judgeHeight();
    if (b == true) {
        for (let i = 0; i < 10; i++) {
            (function() {
                setTimeout(() => {
                    fall()
                }, i * 200)
            })(i);
        }
    }
}