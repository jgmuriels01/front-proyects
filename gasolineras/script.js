import { fetchProvincias, fetchMunicipios, fetchCombustibles, fetchGasolineras } from "./modules/gasolineras.js";
import { addProvincias, addMunicipios, addCombustibles, addGasolineras } from "./modules/addData.js";
import { allowBuscar } from "./modules/buscar.js";

let provincia = null
let municipio = null
let combustible = null
let allowBusqueda = false

/* PROVINCIA */
/* add Provincia options */
let provinciasElement = document.getElementById('provincias')
let provinciasOpcionesElement = document.getElementById('provincias')
addProvincias(provinciasOpcionesElement)

/* MUNICIPIOS */
let municipiosElement = document.getElementById('municipios')
let municipiosOpcionesElement = document.getElementById('municipios')


/* COMBUSTIBLES */
let combustiblesElement = document.getElementById('combustibles')
let combustiblesOpcionesElement = document.getElementById('combustibles')
addCombustibles(combustiblesOpcionesElement)

/* GASOLINERAS */
let gasolinerasElement = document.getElementById('gasolineras')

/* LISTENERS */
provinciasElement.addEventListener('change', () => {
    provincia = provinciasElement.value
    municipio = null
    addMunicipios(municipiosOpcionesElement, provincia)
})
municipiosElement.addEventListener('change', () => {
    municipio = municipiosElement.value
})
combustiblesElement.addEventListener('change', () => {
    combustible = combustiblesElement.value
})


/* BUSCAR */
let buscarElement = document.getElementById('buscar')
/* reset BUSCAR and GASOLINERAS */
provinciasElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})
municipiosElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})
combustiblesElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})

buscarElement.addEventListener('click', () => {
    fetchGasolineras(municipio, combustible)
    addGasolineras(gasolinerasElement, municipio, combustible)
})

/* TESTING */
fetchGasolineras(712, 1)