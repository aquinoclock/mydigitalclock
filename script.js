
const TimeZoneData = {
  UTC: -3,
};
let timezone = document.getElementById("TimeZone");
for (key in TimeZoneData) {
    timezone.innerHTML += `<option value="${key}"</option>`;
}

setInterval(() => {
    const time = document.querySelector(".display #time");
    let TZ = timezone.value;
  let date = new Date();
    let hours = date.getUTCHours();
    console.log(hours);
    if (hours > 12) {
        hours +1;
    }
   
    hours += Math.floor(TimeZoneData[TZ]);
    let minutes = date.getUTCMinutes();
    let minutestoadd = (TimeZoneData[TZ] - Math.floor(TimeZoneData[TZ]));
    if (minutestoadd > 0) {
        minutestoadd = 30;
    }
    minutes += minutestoadd;
    if (minutes > 60) {
        hours += 1;
        minutes -= 60;
    }
    let seconds = date.getUTCSeconds();
    
    let millisec = Math.floor(date.getUTCMilliseconds() / 10).toFixed(0);
    
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (millisec < 10) {
    millisec = "0" + millisec;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = + Math.abs( hours+24);
  }
  time.textContent =
    hours + ":" + minutes + ":" + seconds;
});



