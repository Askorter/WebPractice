(function() {
    let num = document.querySelectorAll('.num')
    let dot = document.querySelectorAll('.dot');
    let dotFlag = true;
    let time = new Date()
    let hour = time.getHours().toString().padStart(2, '0')
    let min = time.getMinutes().toString().padStart(2, '0')
    let sec = time.getSeconds().toString().padStart(2, '0')
    num[0].innerHTML = hour.split('')[0];
    num[1].innerHTML = hour.split('')[1];
    num[2].innerHTML = min.split('')[0];
    num[3].innerHTML = min.split('')[1];
    num[4].innerHTML = sec.split('')[0];
    num[5].innerHTML = sec.split('')[1];
    setInterval(() => {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            num[4].innerHTML = sec.toString().padStart(2, '0').split('')[0];
            num[5].innerHTML = sec.toString().padStart(2, '0').split('')[1];
            num[2].innerHTML = min.toString().padStart(2, '0').split('')[0];
            num[3].innerHTML = min.toString().padStart(2, '0').split('')[1];
            if (min >= 60) {
                min = 0;
                hour++;
                num[2].innerHTML = min.toString().padStart(2, '0').split('')[0];
                num[3].innerHTML = min.toString().padStart(2, '0').split('')[1];
                num[0].innerHTML = hour.toString().padStart(2, '0').split('')[0];
                num[1].innerHTML = hour.toString().padStart(2, '0').split('')[1];
                if (hour > 12) {
                    hour = hour - 12;
                    num[0].innerHTML = hour.toString().padStart(2, '0').split('')[0];
                    num[1].innerHTML = hour.toString().padStart(2, '0').split('')[1];
                }
            }
        } else {
            num[4].innerHTML = sec.toString().padStart(2, '0').split('')[0];
            num[5].innerHTML = sec.toString().padStart(2, '0').split('')[1];
        }
        if (dotFlag == true) {
            dot[0].style.visibility = 'hidden';
            dot[1].style.visibility = 'hidden';
            dotFlag = false;
        } else {
            dot[0].style.visibility = 'visible';
            dot[1].style.visibility = 'visible';
            dotFlag = true;
        }
    }, 1000);
})()