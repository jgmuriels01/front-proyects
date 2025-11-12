import { fetchProvincias, fetchMunicipios, fetchCombustibles, fetchGasolineras, fetchGasolinerasFecha } from "./gasolineras.js";

/* PROVINCIA */
export async function addProvincias(node) {
    let data = await fetchProvincias()
    node.innerHTML = '<option selected disabled>--Seleccionar--</option>'
    data.forEach(e => {
        node.append(renderProvincia(e))
    });
}

function renderProvincia(provincia) {
    let optionElement = document.createElement('option')
    optionElement.value = provincia.IDPovincia
    optionElement.innerText = provincia.Provincia
    return optionElement
}

/* MUNICIPIO */
export async function addMunicipios(node, IDPovincia) {
    let data = await fetchMunicipios(IDPovincia)
    node.innerHTML = '<option selected disabled>--Seleccionar--</option>'
    data.forEach(e => {
        node.append(renderMunicipio(e))
    });
}

function renderMunicipio(municipio) {
    let optionElement = document.createElement('option')
    optionElement.value = municipio.IDMunicipio
    optionElement.innerText = municipio.Municipio
    return optionElement
}

/* COMBUSTIBLES */
export async function addCombustibles(node) {
    let data = await fetchCombustibles()
    node.innerHTML = '<option selected disabled>--Seleccionar--</option>'
    data.forEach(e => {
        node.append(renderCombustible(e))
    });
}

function renderCombustible(combustible) {
    let optionElement = document.createElement('option')
    optionElement.value = combustible.IDProducto
    optionElement.innerText = combustible.NombreProducto
    return optionElement
}

/* GASOLINERAS */
export async function addGasolineras(node, IDMunicipio, IDProducto, open, fecha) {
    let data
    node.innerHTML = '<div class=\'cargando\'>Cargando...</div>'
    if (open) {
        data = await fetchGasolinerasFecha(fecha, IDMunicipio, IDProducto)
    } else {
        data = await fetchGasolineras(IDMunicipio, IDProducto)
    }
    node.innerHTML = ''
    console.log('ACCEDIENDO A GASOLINERAS')
    if (data.ListaEESSPrecio.length > 0) {
        data.ListaEESSPrecio.forEach(e => {
            console.log('pintando GASOLINERA')
            node.append(renderGasolinera(e))
        })
    }else{
        node.innerHTML = '<div class=\'cargando\'>Sin resultados</div>'
    }
}

function renderGasolinera(gasolinera) {
    let gasolineraElement = document.createElement('div')
    gasolineraElement.classList.add('gasolinera')
    gasolineraElement.innerHTML = `
        <div class="gasolinera-nombre">Gasolinera num.${gasolinera.IDEESS}, ${gasolinera.Rótulo}</div>
        <div class="gasolinera-direccion">Dirección: ${gasolinera.Dirección}</div>
        <div class="gasolinera-localidad">Localidad: ${gasolinera.Localidad}</div>
        <div class="gasolinera-provincia">Provincia: ${gasolinera.Provincia}</div>
        <div class="gasolinera-horario">Horario: ${gasolinera.Horario}</div>
        <div class="gasolinera-precio">Precio: ${gasolinera.PrecioProducto} Euro</div>
    `
    return gasolineraElement
}