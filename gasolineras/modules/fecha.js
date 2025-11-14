export function getFormatedDate() {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth()
    let year = now.getFullYear()
    let formatedDate = `${day}-${month}-${year}`
    console.log('Fecha actual: ', formatedDate)
    return formatedDate
}

let days = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

function dayBetween(nowDay, startDay, endDay) {
    return nowDay >= days.indexOf(startDay) && nowDay <= days.indexOf(endDay)
}

function dayCoincidence(nowDay, day) {
    return nowDay == days.indexOf(day)
}

function hourBetween(nowMinutes, startMinutes, endMinutes) {
    return nowMinutes >= Number(startMinutes) && (nowMinutes <= Number(endMinutes) || Number(endMinutes) == 0)
}

function intervalOk(nowDate, date) {
    let nowDay = nowDate.getDay() - 1
    if (nowDay < 0) {
        nowDay = 6
    }
    let nowMinutes = nowDate.getHours() * 60 + nowDate.getMinutes()
    
    let dateDays = date.split(" ")[0].slice(0, -1).split("-")
    let dayOk = false
    if(dateDays.length > 1){
        dayOk = dayBetween(nowDay, dateDays[0], dateDays[1])
    }else{
        dayOk = dayCoincidence(nowDay, dateDays[0])
    }
    if(!dayOk){
        return false
    }else{
        let dateHours = date.split(" ")[1].split("-")
        if(dateHours.length > 1){
            let startMinutes = Number(dateHours[0].split(":")[0]) * 60 + Number(dateHours[0].split(":")[1])
            let endMinutes = Number(dateHours[1].split(":")[0]) * 60 + Number(dateHours[1].split(":")[1])
            return hourBetween(nowMinutes, startMinutes, endMinutes)
        }else{
            return true
        }
    }
}

export function intervalsOk(nowDate, dates){
    let datesSplit = dates.split(";")
    let checkIntervalsOk = false
    let counter = 0
    //console.log(`Test: ${datesSplit}`)
    while(!checkIntervalsOk && counter < datesSplit.length){
        checkIntervalsOk = intervalOk(nowDate, datesSplit[counter].trim())
        //console.log(`Test: ${datesSplit[counter].trim()}`)
        counter++
    }
    return checkIntervalsOk
}