var focus = document.getElementsByClassName('textbox')[0];
var listw = document.getElementsByClassName("list-working")[0];
var listd = document.getElementsByClassName('list-done')[0];

function working() {
    var w = document.getElementsByClassName('list-working')[0];
    var d = document.getElementsByClassName('list-done')[0];
    var wb = document.getElementById('tabwork');
    var db = document.getElementById('tabdone');
    wb.style.color = "#333";
    wb.style.fontSize = "20px";
    db.style.color = "#8b8b8b";
    db.style.fontSize = "16px";

    // d.style.visibility = "hidden";
    // w.style.visibility = "visible";
    d.style.opacity = "0";
    setTimeout(() => {
        w.style.display = "block";
        d.style.display = "none";
    }, 500);
    setTimeout(() => {
        w.style.opacity = "1";
    }, 600);

}

function done() {
    var w = document.getElementsByClassName('list-working')[0];
    var d = document.getElementsByClassName('list-done')[0];
    var wb = document.getElementById('tabwork');
    var db = document.getElementById('tabdone');
    wb.style.color = "#8b8b8b";
    db.style.color = "#333";
    wb.style.fontSize = "16px";
    db.style.fontSize = "20px";
    // d.style.visibility = "visible";
    // w.style.visibility = "hidden";
    w.style.opacity = "0";
    setTimeout(() => {
        w.style.display = "none";
        d.style.display = "block";
    }, 500);
    setTimeout(() => {
        d.style.opacity = "1";
    }, 600);

}

function tick(e) {
    if (e.target) {
        var p = e.target.parentNode;
        var x = e.target;
        var r = document.getElementsByClassName('list-done')[0];
        if (x.checked == true) {
            console.log(p);
            addtolocal('del', 0, p.id);
            reload();
        }
    }
}
focus.onkeyup = event => {
    if (event.which === 13 && focus.value != "") {
        var bus = focus.value;
        focus.value = "";
        addtolocal('add', bus, focus.id);
        reload();
    }
}

function addtolocal(branch, value, id) {
    if (branch == "add") {
        var work = localStorage.getItem("working");
        work = JSON.parse(work);
        work.push([value]);
        work = JSON.stringify(work);
        localStorage.setItem("working", work);
    } else if (branch == "del") {
        var work = localStorage.getItem("working");
        var done = localStorage.getItem("done");
        work = JSON.parse(work);
        done = JSON.parse(done);
        console.log(id);
        done.push(work[id]);
        work.splice(id, 1);
        work = JSON.stringify(work);
        done = JSON.stringify(done);
        localStorage.setItem("working", work);
        localStorage.setItem("done", done);
    }
}

function deleteitem(e) {
    var p = e.target.parentNode;
    var work = localStorage.getItem("working");
    work = JSON.parse(work);
    work.splice(p.id, 1);
    work = JSON.stringify(work);
    localStorage.setItem("working", work);
    reload();
}

function reload() {
    listw.innerHTML = "";
    listd.innerHTML = "";
    var s = localStorage.getItem("working");
    s = JSON.parse(s);
    for (let i = 0; i < s.length; i++) {
        let newlist = document.createElement('div');
        newlist.className = "list-working-item";
        newlist.id = i;
        newlist.innerHTML = `<input class="list-working-item-check" type="radio" onclick="tick(event)"><label>${s[i]}</label><button id="delete" onclick="deleteitem(event)">delete</button>`;
        listw.appendChild(newlist);
    }
    var d = localStorage.getItem("done");
    d = JSON.parse(d);
    for (let i = 0; i < d.length; i++) {
        let newlist = document.createElement('div');
        newlist.className = "list-working-item";
        newlist.id = i;
        newlist.innerHTML = `<span>${d[i]}</span>`;
        listd.appendChild(newlist);
    }
}

window.onload = function() {
    if (localStorage.length == 0) {
        var a = [];
        var b = [];
        a = JSON.stringify(a);
        b = JSON.stringify(b);
        localStorage.setItem("working", a);
        localStorage.setItem("done", b);
    }
    reload();
}