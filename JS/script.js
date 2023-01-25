let hr = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let hh;
let mh;
let sh;
let ampm;

let hourValue;
let minValue;
let secValue;
let ampmValue;

var container = document.querySelector(".container");

var timeContainer = document.querySelectorAll(".set-time-container");
var timeList = document.querySelectorAll(".time-list");

var hrtimeStamps = document.querySelectorAll(".hours li");
var minstimeStamps = document.querySelectorAll(".mins li");
var sectimeStamps = document.querySelectorAll(".sec li");
var ampmtimeStamps = document.querySelectorAll(".ampm li");

var setHour = document.querySelector(".set-hr");
var setMin = document.querySelector(".set-min");
var setSec = document.querySelector(".set-sec");
var setampm = document.querySelector(".set-ampm");

var buttonsContainer = document.querySelector(".buttons-container");
var createButton = document.querySelector(".create-alarm");

alarm = new Audio("music/alarm.mp3");
alarm.loop = true;



createButton.addEventListener("click", function () {
    hourValue = setHour.innerText.slice(0, 2);
    minValue = setMin.innerText.slice(0, 2);
    secValue = setSec.innerText.slice(0, 2);
    ampmValue = setampm.innerText.slice(0, 2).toLowerCase();

})

document.querySelector(".stop-alarm").addEventListener("click", function () {

    stopAlarm();

});

setInterval(() => {

    let day = new Date();

    hh = day.getHours();
    mh = day.getMinutes();
    sh = day.getSeconds();

    console.log(hh);


    let mval = (mh * 6);
    let hval = ((hh - 12) * 30) + (mval / 12);
    let sval = (sh * 6);

    hr.style.transform = `rotateZ(${hval}deg)`;
    min.style.transform = `rotateZ(${mval}deg)`;
    sec.style.transform = `rotateZ(${sval}deg)`;


    let showTime = document.querySelector(".time");


    if (hh > 12) {
        hh = Math.abs(hh - 12);
        ampm = "pm";
        if (hh < 10) {
            hh = "0" + hh;
        }
    }
    else if (hh < 12) {
        ampm = "am";
    }
    else if (hh == 0 && mh == 0) {
        hh = 12;
        ampm = "mn";
    }
    else if (hh == 12 && mh == 0) {
        ampm = "nn"
    }

    if(hh == 0 && mh > 0){
        hh = 12;
        ampm = "am";
    }

    if (sh < 10) {
        sh = "0" + sh;
    }

    if (mh < 10) {
        mh = "0" + mh;
    }


    if ((hourValue == hh) && (minValue == mh) && (secValue == sh) && (ampmValue == ampm)) {
        console.log(hh + " " + mh + " " + sh + " " + ampm);
        alarm.play();
    }

    showTime.innerText = (hh + " " + ":" + " " + mh + " " + ":" + " " + sh + " " + ampm);

}, 1000);

function stopAlarm(){
    alarm.pause();
}


for (let i = 0; i < timeContainer.length; i++) {
    timeContainer[i].addEventListener("click", function () {
        timeList[i].classList.toggle("hide");
        var flag = 0;
        for (let j = 0; j < timeList.length; j++) {
            var classes = timeList[j].classList;
            if (!classes.contains("hide")) {
                flag++;
            }
        }

        if (flag == 1) {
            container.classList.remove("dyn-Height");
            container.classList.add("height-change");

            buttonsContainer.classList.remove("actual-height");
            buttonsContainer.classList.add("extended-height");
        }
        else if (flag == 0) {
            container.classList.add("dyn-Height");
            container.classList.remove("height-change");

            buttonsContainer.classList.add("actual-height");
            buttonsContainer.classList.remove("extended-height");
        }
    })
}

Array.from(hrtimeStamps).forEach(element => {
    element.addEventListener("click", function () {
        setHour.innerText = element.innerText + " hours";
    })
})

Array.from(minstimeStamps).forEach(element => {
    element.addEventListener("click", function () {
        setMin.innerText = element.innerText + " mins";
    })
})

Array.from(sectimeStamps).forEach(element => {
    element.addEventListener("click", function () {
        setSec.innerText = element.innerText + " secs";
    })
})

Array.from(ampmtimeStamps).forEach(element => {
    element.addEventListener("click", function () {
        setampm.innerText = element.innerText;
    })
})





