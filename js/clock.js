function setzero(num) {
    var set;
    if (num < 10) { set = "0" + num; }
    else { set = num; }
    return set;
}

function clock() {
    var time = new Date();

    var year = (time.getFullYear());
    var month = (time.getMonth());
    var date = (time.getDate());

    var hour = setzero(time.getHours());
    var min = setzero(time.getMinutes());
    var sec = setzero(time.getSeconds());

    var msg = "今は　" + year + "年" + month + "月" + date + "日 " + hour + "時" + min + "分" + sec + "秒　です！";
    document.getElementById("clockarea").innerHTML = msg;
}
setInterval('clock()', 1000);