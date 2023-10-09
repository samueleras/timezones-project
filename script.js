"use strict";

const timezoneElement = document.querySelector('#timezone');
const timeElement = document.querySelector('#time');
const dateElement = document.querySelector('#date');

//Import dayjs
const dayjs = require("dayjs");

//Locales
require('dayjs/locale/de');
require('dayjs/locale/en-gb');

//Locale Formater
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat);

//TimeZones
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc);
dayjs.extend(timezone);


//Import micromodal
const { default: MicroModal } = require("micromodal");



let d1 = dayjs.utc().tz('Asia/Taipei').locale('de').format('LLL');
console.log(d1);

d1 = dayjs.utc().tz('America/New_York').locale('de').format('LLL');
console.log(d1);


function setTime() {
    let date = dayjs.utc().tz(tz);
    timeElement.innerHTML = date.format('hh:mm:ss');
    dateElement.innerHTML = date.format('dddd, D MMMM, YYYY');
}

let tz = 'Asia/Tokyo';
setInterval(setTime, 1000);
timezoneElement.innerHTML = tz;




//First Setup git in VS, then create the timezoneapp as public repo with dayjs and micromodal as described in the fullstack roadmap. Search for the package documentaries on npmjs.com