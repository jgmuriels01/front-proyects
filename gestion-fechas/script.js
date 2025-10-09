// Declaration of variables
let currentDate = new Date();
let targetDate = new Date(currentDate);

// Declaration of constants
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30;
const YEAR = MONTH * 12;



// Declaration of html structure
let titleElementH1 = document.createElement("h1");
let mainElement = document.createElement("main");
let quedaElementDiv = document.createElement("div");
let currentDateElementDiv = document.createElement("div");
let targetDateElementDiv = document.createElement("div");

//Text to fill divs
titleElementH1.innerHTML = "Cuenta atrás para fecha elegida"
quedaElementDiv.innerHTML = "<strong>Quedan: </strong>";
currentDateElementDiv.innerHTML = "<strong>Fecha actual: </strong>";
targetDateElementDiv.innerHTML = "<strong>Fecha de finalización de cuentra atrás: </strong>";

//Declaration of inputs and labels
let counterElementLabel = document.createElement("label");
let currentDateElementLabel = document.createElement("label");
let targetDateElementInput = document.createElement("input");
targetDateElementInput.setAttribute("type", "date");
targetDateElementInput.setAttribute("id", "selectedDate");

//Initialization of inputs/labels


//Put labeles/inputs inside their divs
quedaElementDiv.appendChild(counterElementLabel);
currentDateElementDiv.appendChild(currentDateElementLabel)
targetDateElementDiv.appendChild(targetDateElementInput);

//Add to body
document.body.appendChild(titleElementH1);
document.body.appendChild(mainElement);
mainElement.appendChild(quedaElementDiv);
mainElement.appendChild(currentDateElementDiv)
mainElement.appendChild(targetDateElementDiv);

// Update each seconds current date
let invervalAlways = setInterval(updateCurrentDate, 1000)

function updateCurrentDate() {
    currentDate.setTime(currentDate.getTime() + 1000);
    currentDateElementLabel.innerHTML = currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString();
}
// Listener to reset counter from targetDate
targetDateElementInput.addEventListener("change", changeCurrentDate);

function changeCurrentDate() {
    let temporallyVarDate = targetDateElementInput.value.split("-"); // Retrieve YYYY, MM, DD
    targetDate.setDate(Number(temporallyVarDate[2]));
    targetDate.setMonth(Number(temporallyVarDate[1]) - 1);
    targetDate.setYear(Number(temporallyVarDate[0]));
    targetDate.setHours(0, 0, 0, 0)
    restartInterval();

}

// Interval to execute counter every second
let interval;
function startInterval() {
    interval = setInterval(counter, 1000);
}
function stopInterval() {
    clearInterval(interval);
}
function restartInterval() {
    stopInterval();
    startInterval();
}
startInterval();
/* Get difference between currentDate and targetDate,
Add 1 second to currentDate,
Refresh currentDateElement (label) with +1s date
Refresh counterElement (label) with current difference. */
function counter() {
    let difference = targetDate - currentDate;
    if (difference <= 0) {
        clearInterval(interval);
        difference = 0;
    }
    counterElementLabel.innerHTML = printdateObj(milisecondsToObj(difference));
    printColor(difference)
}

// Transform miliseconds into an objets which contains seconds, min, hours, days and months
function milisecondsToObj(miliseconds) {
    let dateObj = {
        secondsObj: Math.floor(miliseconds / SECOND) % 60,
        minutesObj: Math.floor(miliseconds / MINUTE) % 60,
        hoursObj: Math.floor(miliseconds / HOUR) % 24,
        daysObj: Math.floor(miliseconds / DAY) % 30,
        monthsObj: Math.floor(miliseconds / MONTH) % 12,
        yearsObj: Math.floor(miliseconds / YEAR),
    }
    return dateObj;
}

// Print the objetc which contains seconds, min, hours, days and months
function printdateObj(dateObj) {
    let stringDateObj = `${dateObj.secondsObj} segundo(s), ${dateObj.minutesObj} minuto(s), ${dateObj.hoursObj} hora(s), ${dateObj.daysObj} día(s), ${dateObj.monthsObj} mes(es) y ${dateObj.yearsObj} año(s).`
    return stringDateObj;
}

// print counter with color
function printColor(miliseconds) {
    counterElementLabel.style.color = "green";
    if (miliseconds < MONTH) {
        counterElementLabel.style.color = "orange";
        if (miliseconds < (DAY * 7)) {
            counterElementLabel.style.color = "red";
        }
    }
}
printColor()

// Styles (classes)



