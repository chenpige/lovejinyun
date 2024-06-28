function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth() + 1 
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    // 修改这里时间即可 我认识她是2022.4.6
    var t1 = Date.UTC(2022,4, 6, 10, 44, 0)
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) )
    var diffHours = Math.floor((diff - (diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffDays) * days - diffHours * hours - diffMinutes *
        minutes) / seconds)
    document.getElementById("lovetime").innerHTML = "认识你的第 "  + diffDays + "天" +
        diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒🌹"
}
lovetime()