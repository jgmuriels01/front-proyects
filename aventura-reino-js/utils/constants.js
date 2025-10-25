import { Player } from '../modules/player.js';
import { Enemy, FinalBoss } from '../modules/enemies.js';
import { Product } from '../modules/product.js';

export const PROPLAYER_POINTS = 20;

export const PLAYER = new Player('Hollow Knight');

export const ENEMIES = [
    new Enemy('Goblin', 50, 10, './IMG/goblin.png'),
    new Enemy('Orco', 75, 20, './IMG/orc.png'),
    new Enemy('Bandido', 50, 5, './IMG/bandit.png')
];

export const FINAL_BOSSES = [
    new FinalBoss('Dragón', 150, 50, 'Aliento de fuego', 1.3, './IMG/dragon.png'),
    new FinalBoss('Kraken', 200, 40, 'Tsunami', 1.3, './IMG/kraken.png')
];

export const SHOP = [
    // Weapons
    new Product("Espada de madera", 35, "Common", "Weapon", 5, './IMG/sword.png'),
    new Product("Espada de bronce", 70, "Rare", "Weapon", 10, './IMG/sword.png'),
    new Product("Espada de hierro", 95, "Rare", "Weapon", 15, './IMG/sword.png'),
    new Product("Espada de la Aurora", 160, "Legendary", "Weapon", 25, './IMG/sword.png'),
    new Product("Tridente del Leviatán", 175, "Legendary", "Weapon", 30, './IMG/sword.png'),

    // Armors
    new Product("Armadura de cuero", 20, "Common", "Armor", 5, './IMG/armor.png'),
    new Product("Armadura de bronce", 40, "Rare", "Armor", 10, './IMG/armor.png'),
    new Product("Armadura de hierro", 60, "Rare", "Armor", 15, './IMG/armor.png'),
    new Product("Armadura de la Aurora", 120, "Legendary", "Armor", 25, './IMG/armor.png'),
    new Product("Armadura de las profundidades", 140, "Legendary", "Armor", 30, './IMG/armor.png'),

    // Potions
    new Product("Cerveza", 10, "Common", "Potion", 20, './IMG/potion.png'),
    new Product("Bálsamo fortalecedor", 20, "Rare", "Potion", 35, './IMG/potion.png'),
    new Product("Elixir de dioses", 50, "Legendary", "Potion", 80, './IMG/potion.png')
];