import { Player } from '../modules/player.js';
import { Enemy, FinalBoss } from '../modules/enemies.js';
import { Product } from '../modules/product.js';

const PROPLAYER_POINTS = 1000;

const PLAYER = new Player('Hollow Knight');

const ENEMIES = [
    new Enemy('Goblin', 50, 10),
    new Enemy('Orco', 75, 20),
    new Enemy('Bandido', 50, 5)
];

const FINAL_BOSSES = [
    new FinalBoss('Dragón', 150, 50, 'Aliento de fuego', 1.3),
    new FinalBoss('Kraken', 200, 40, 'Tsunami', 1.3)
];

const MARKET = [
    // Weapons
    new Product("Espada de madera", 35, "Common", "Weapon", 5),
    new Product("Espada de bronce", 70, "Rare", "Weapon", 10),
    new Product("Espada de hierro", 95, "Rare", "Weapon", 15),
    new Product("Espada de la Aurora", 160, "Legendary", "Weapon", 25),
    new Product("Tridente del Leviatán", 175, "Legendary", "Weapon", 30),

    // Armors
    new Product("Armadura de cuero", 20, "Common", "Armor", 5),
    new Product("Armadura de bronce", 40, "Rare", "Armor", 10),
    new Product("Armadura de hierro", 60, "Rare", "Armor", 15),
    new Product("Armadura de la Aurora", 120, "Legendary", "Armor", 25),
    new Product("Armadura de las profundidades", 140, "Legendary", "Armor", 30),

    // Potions
    new Product("Cerveza", 10, "Common", "Potion", 20),
    new Product("Bálsamo fortalecedor", 20, "Rare", "Potion", 35),
    new Product("Elixir de dioses", 50, "Legendary", "Potion", 80)
];