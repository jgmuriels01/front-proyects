import { intervalsOk } from "../modules/fecha.js"

const data = {
    "dates": [
        "2025-03-05T10:00", /* Wednesday 10:00 */
        "2025-03-09T13:00" /* Sunday 13:00 */
    ],
    "tests": [
        {
            "schedule": "L-D: 06:00-21:30",
            "results": ["open", "open"]
        },
        {
            "schedule": "L-V: 06:00-20:00",
            "results": ["open", "closed"]
        },
        {
            "schedule": "M-J: 08:00-18:00",
            "results": ["open", "closed"]
        },
        {
            "schedule": "S-D: 09:00-14:00",
            "results": ["closed", "open"]
        },
        {
            "schedule": "L: 06:00-21:30",
            "results": ["closed", "closed"]
        },
        {
            "schedule": "M: 07:00-22:00",
            "results": ["closed", "closed"]
        },
        {
            "schedule": "X: 08:30-20:00",
            "results": ["open", "closed"]
        },
        {
            "schedule": "D: 10:00-15:00",
            "results": ["closed", "open"]
        },
        {
            "schedule": "L-V: 06:00-21:30; S: 06:00-16:00",
            "results": ["open", "closed"]
        },
        {
            "schedule": "L-J: 07:00-19:00; V: 07:00-17:00; S-D: 09:00-14:00",
            "results": ["open", "open"]
        },
        {
            "schedule": "L-M: 06:00-14:00; X-V: 15:00-22:00",
            "results": ["closed", "closed"]
        },
        {
            "schedule": "L-D: 24H",
            "results": ["open", "open"]
        },
        {
            "schedule": "L-V: 24H; S-D: 07:00-23:00",
            "results": ["open", "open"]
        },
        {
            "schedule": "S-D: 24H",
            "results": ["closed", "open"]
        },
        {
            "schedule": "L: 24H",
            "results": ["closed", "closed"]
        }
    ]
}

let error = false
data.tests.forEach(element => {
    let result = intervalsOk(new Date(data.dates[0]), element.schedule)
    let validation = (element.results[0] == "open" ? true : false) == result
    console.log(result, 'miercoles 10.00')
    console.log(validation , 'miercoles 10.00')
    if(!validation){
        console.log('Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }

    console.log(new Date(data.dates[1]))
    result = intervalsOk(new Date(data.dates[1]), element.schedule)
    validation = (element.results[1] == "open" ? true : false) == result
    console.log(result, 'domingo 13.00')
    console.log(validation , 'domingo 13.00')
    if(!validation){
        console.log('Error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
});
