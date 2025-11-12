import { urlProvincias, urlMunicipiosParcial, urlCombustiblesParcial, urlGasolinerasParcial, urlGasolinerasFechaParcial } from "../utils/constants.js"

/* PROVINCIA */
export async function fetchProvincias(){
    let dataJSON = await fetch(urlProvincias)
    let data = await dataJSON.json()
    console.log(data)
    return data
}

/* MUNICIPIO */
export async function fetchMunicipios(IDPovincia){
    let dataJSON = await fetch(urlMunicipiosParcial + IDPovincia)
    let data = await dataJSON.json()
    console.log(data)
    return data
}

/* COMBUSTIBLES */
export async function fetchCombustibles(){
    let dataJSON = await fetch(urlCombustiblesParcial)
    let data = await dataJSON.json()
    console.log(data)
    return data
}

/* GASOLINERAS */
export async function fetchGasolineras(IDMunicipio, IDProducto){
    let dataJSON = await fetch(urlGasolinerasParcial + IDMunicipio + "/" + IDProducto)
    let data = await dataJSON.json()
    console.log(data)
    console.log(data.ListaEESSPrecio)
    return data
}

export async function fetchGasolinerasFecha(fecha, IDMunicipio, IDProducto){
    let dataJSON = await fetch(urlGasolinerasFechaParcial + fecha + "/" + IDMunicipio + "/" + IDProducto)
    let data = await dataJSON.json()
    console.log(data)
    console.log(data.ListaEESSPrecio)
    return data
}