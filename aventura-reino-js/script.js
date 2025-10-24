import { PROPLAYER_POINTS, PLAYER, ENEMIES, FINAL_BOSSES, SHOP } from './utils/constants.js';
import { battle } from './modules/battle.js'
import { Enemy, FinalBoss } from './modules/enemies.js'
import { filterShop, findProduct, applyDiscount, showShop } from './modules/shop.js'
import { Player } from './modules/player.js'
import { Product } from './modules/product.js'
import { categorizePlayer } from './modules/ranking.js'

/* testing */
PLAYER.buyProduct(findProduct(SHOP, 'Espada de madera'))
console.log(PLAYER.inventory)



/* Player */
let playerImgElement = document.getElementById('player-img')
let playerNameElement = document.getElementById('player-name')
let playerStatsElement = document.getElementById('player-stats')
let playerInventory = PLAYER.inventory
playerImgElement.setAttribute('src', 'https://picsum.photos/150/150')
playerNameElement.innerText = PLAYER.name
PLAYER.showStats(playerStatsElement)

/* Shop */
let shopElement = document.getElementById('shop')
showShop(SHOP, shopElement)

/* footer inventory */
let footerElement = document.getElementById('footer');
let footerInventory = document.querySelectorAll('#inventory-container .item img')
PLAYER.showInventory(footerInventory)



