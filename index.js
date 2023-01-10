
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");




// for hour
const tickHour = () => {
    let timeHour = new Date().getHours();
    if (timeHour < 10) {
        hour.innerHTML = "0" + timeHour;
    } else {
        hour.innerHTML = timeHour;
    }        
}
setInterval(tickHour,1000); // for hour 


// for Minute
const tickMinute = () => {
    let timeMinute = new Date().getMinutes().toLocaleString();
    if(timeMinute < 10) {
        minute.innerHTML = "0" + timeMinute;    
    } else{
        minute.innerHTML = timeMinute;
    }    
}
setInterval(tickMinute, 1000); // for  minute


//for second
const tickSecond = () => {
    let timeSecond = new Date().getSeconds().toLocaleString();
    if(timeSecond < 10) {
        second.innerHTML = "0" + timeSecond;
    } else {
        second.innerHTML = timeSecond;   
    }
}
setInterval(tickSecond, 1000);  // for seconds


