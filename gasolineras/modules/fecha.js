export function getFormatedDate(){
    let now = new Date()
    let day = now.getDate()
    /* let day = 16 */
    let month = now.getMonth()
    let year = now.getFullYear()
    let formatedDate = `${day}-${month}-${year}`
    console.log('Fecha actual: ',formatedDate)
    return formatedDate
}