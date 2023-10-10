"use strict";

const timezoneElement = document.querySelector('#timezone');
const timeElement = document.querySelector('#time');
const dateElement = document.querySelector('#date');
const formTimezone = document.querySelector('#form-timezone');
const timezoneDropdown = document.querySelector('#timezone-dropdown');


//Default Timezone
let tz = 'Asia/Tokyo';
timezoneElement.innerHTML = tz;

//Import dayjs
const dayjs = require("dayjs");

//TimeZones
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);

//Import de locale
require('dayjs/locale/de');

//Import micromodal
const MicroModal = require("micromodal");

//Initialize Micromodal. Will ne called by #edit button via attribute
MicroModal.init();

//Add Choosable Timzones
const timezones = ["Europe/London", "Europe/Berlin", "Asia/Tokyo", "America/New_York"];	

for(let tz of timezones){
    let option = document.createElement("option");
    option.value = tz;
    option.innerText = tz;
    timezoneDropdown.appendChild(option);
}



formTimezone.addEventListener("submit", async (e) => {

    e.preventDefault();

    tz = timezoneDropdown.value;
    console.log(tz);
    timezoneElement.innerHTML = tz;
    MicroModal.close('modal-timezone');

});


function setTime() {
    let date = dayjs.utc().tz(tz);
    timeElement.innerHTML = date.locale('de').format('HH:mm:ss');
    dateElement.innerHTML = date.locale('de').format('dddd, D MMMM, YYYY');
}

//Start Clock
setInterval(setTime, 1000);
