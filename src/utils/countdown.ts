import { DateTime } from 'luxon';
import { servers } from '../constants';
import {parserTime} from '../utils/parserTime'

let container = document.getElementById("countdown");

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 
const serverTimeZone = Boolean(container?.dataset.newVersion) ? "UTC+8" : servers.find(server => server.name == (document.getElementById("server-input") as HTMLInputElement).value)?.zone;

let [_, userTime ] = parserTime(Number(container?.dataset.time), serverTimeZone, userTimeZone)

const dt = Number(DateTime.fromISO(userTime as string));

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes= document.getElementById("min");
let seconds = document.getElementById("sec");

let msInDay = 1000 * 60 * 60 * 24;
let msInHour = 1000 * 60 * 60;
let msInMinute = 1000 * 60;

let x = setInterval(() => { 
    let now = Date.now();
    let diff = dt - now;
 
  if (diff <= 0) {
        clearInterval(x);

        return;
    }
    let d = String(Math.floor(diff / msInDay));
    let h =String( Math.floor((diff % msInDay) / msInHour));
    let m = String(Math.floor((diff % msInHour) / msInMinute));
    let s =String( Math.floor((diff % msInMinute) / 1000));

    updateUi(d,h,m,s)

    
},1000)


function updateUi(d: string,h: string,m: string,s: string) {

    days?.style.setProperty("--value", d);
    hours?.style.setProperty("--value", h);
    minutes?.style.setProperty("--value", m);
    seconds?.style.setProperty("--value", s);

    
}




