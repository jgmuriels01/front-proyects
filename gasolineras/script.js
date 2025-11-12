import { fetchProvincias, fetchMunicipios, fetchCombustibles, fetchGasolineras, fetchGasolinerasFecha } from "./modules/gasolineras.js";
import { addProvincias, addMunicipios, addCombustibles, addGasolineras } from "./modules/addData.js";
import { allowBuscar } from "./modules/buscar.js";
import { getFormatedDate } from "./modules/fecha.js";

let provincia = null
let municipio = null
let combustible = null
let open = false

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

/* GASOLINERAS ABIERTAS */
let openElement = document.getElementById('open')

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
openElement.addEventListener('change', () => {
    open = openElement.checked
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
openElement.addEventListener('change', () => {
    gasolinerasElement.innerHTML = ''
})

buscarElement.addEventListener('click', async () => {
    
    await fetchGasolineras(municipio, combustible)
    await addGasolineras(gasolinerasElement, municipio, combustible, open, getFormatedDate())
})

/* TESTING */
/* getFormatedDate() */
/* fetchGasolineras(712, 1)
let fecha = '2025/11/12'
let fecha2 = '2025-11-12'
let fecha3 = '00:00:00'
let fecha4 = '2025-11-12T00:00:00'
let fecha5 = 'Wed, 12 Nov 2025 11:02:55 GMT'
let fecha6 = '12/11/2025 09:30:01'
let fecha7 = '12/11/2025'
let fecha8 = 'P0DT1H1M1S'
let fecha9 = '12-11-2025'
fetchGasolinerasFecha(fecha9, 712, 1) */
