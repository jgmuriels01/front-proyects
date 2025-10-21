import { Enemigo, JefeFinal } from "./modules/enemies.js";
import { market, showProductInfo, applyDiscount, filterMarket, search } from "./modules/market.js";
import { Product } from "./modules/product.js";
import { categogorizePlayers, rankPlayers } from "./modules/ranking.js";
import { battle } from "./modules/battle.js";

// creacion de enemigos
const Enemigos = [
    new Enemigo('enemigo', 'Goblin', 3, 30),
    new Enemigo('enemigo', 'Orco', 5, 50),
    new Enemigo('enemigo', 'Bandido', 6, 60)
];

// crear const enemigo va ser una lista 
const JefeFinales = [
    new JefeFinal('Jefe final', 'Dragón', 50, 300, 'Aliento de fuego', 1.3),
    new JefeFinal('Jefe final', 'Monstruo', 60, 400, 'Invocación de esqueletos', 1.3)
];

// mostrar datos
Enemigos.forEach(e => console.log(e.action()));
JefeFinales.forEach(j => console.log(j.action()));


//enseñar mercado
console.log("\n=== Inicio del Mercado ===");
market.forEach(product => console.log(showProductInfo(product)));

//descuento a legendarios
console.log("\n=== Aplicando 10% de descuento a productos Legendarios ===");
const discountedMarket = applyDiscount(market, "Legendaria", 10);
discountedMarket.forEach(product => console.log(showProductInfo(product)));

// Filtrar por rareza legendaria
console.log("\n=== Productos Legendarios ===");
const legendaryProducts = filterMarket("Legendaria", market);
legendaryProducts.forEach(product => console.log(showProductInfo(product)));

// Buscar un producto especifico
console.log("\n=== Buscando 'Espada del Gladiador' ===");
const espada = search(market, "Espada del Gladiador");
if (espada) {
    console.log(showProductInfo(espada));
} else {
    console.log("Producto no encontrado.");
}

