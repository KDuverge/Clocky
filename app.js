console.log("CONNECTED...");
function clock(){
    let hourLogo = document.getElementById('hour');
    let minuteLogo = document.getElementById('minute');
    let secondLogo = document.getElementById('second');
    
    const fullDate = new Date();
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();
    let second = fullDate.getSeconds();

    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    hourLogo.innerHTML = hour + ":";
    minuteLogo.innerHTML = minute + ":";
    secondLogo.innerHTML = second;
};

setInterval(clock, 1000);


