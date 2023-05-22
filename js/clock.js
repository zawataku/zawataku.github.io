function setzero(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if (num < 10) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}
function clock() {
    var nowTime = new Date();
    var nowHour = setzero(nowTime.getHours());
    var nowMin = setzero(nowTime.getMinutes());
    var nowSec = setzero(nowTime.getSeconds());
    var msg = "今の時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です！";
    document.getElementById("clockarea").innerHTML = msg;
}
setInterval('clock()', 1000);