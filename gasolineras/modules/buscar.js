let buscarElement = document.getElementById('buscar')

export function allowBuscar(provincia, municipio, gasolina){
    if(provincia && municipio && gasolina){
        buscarElement.disabled = false
    }else{
        buscarElement.disabled = true
    }
    console.log(`provincia ${provincia}`)
    console.log(`municipio ${municipio}`)
    console.log(`combustible ${gasolina}`)
}