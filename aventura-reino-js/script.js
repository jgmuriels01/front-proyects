import { PROPLAYER_POINTS, PLAYER, ENEMIES, FINAL_BOSSES, SHOP } from './utils/constants.js';
import { showScene } from './utils/scene.js';
import { showBattle } from './modules/battle.js'
import { Enemy, FinalBoss } from './modules/enemies.js'
import { filterShop, findProduct, applyDiscount, showShop } from './modules/shop.js'
import { Player } from './modules/player.js'
import { Product } from './modules/product.js'
import { showRanking } from './modules/ranking.js'


/* testing */
/* PLAYER.buyProduct(findProduct(SHOP, 'Espada de madera'))
console.log(PLAYER.inventory) */

/* Init */
let copy = structuredClone(PLAYER)
let battles = 0
let initialScene = "scene-player"
showScene(initialScene)
PLAYER.showPlayer(document.getElementById(initialScene))


/* Reset */
function reset() {
    PLAYER = structuredClone(copy)
    battles = 0
}

/* footer inventory */
let footerElement = document.getElementById('footer');
let footerInventory = document.querySelectorAll('#inventory-container .item img')

/* Shop */
let shopElement = document.getElementById('shop')
showShop(shopElement, SHOP)
let buyButtonsElements = document.querySelectorAll("#shop button")
buyButtonsElements.forEach(buyButton => {
    buyButton.addEventListener("click", () => {
        PLAYER.buyProduct(findProduct(SHOP, buyButton.parentElement.id))
        PLAYER.showInventory(footerInventory)
    })
})




/* CONTINUE and RESET buttons */
let playerContinueButtonElement = document.getElementById("player-continue")
let shopContinueButtonElement = document.getElementById("shop-continue")
let playerInventoryContinueButtonElement = document.getElementById("player-inventory-continue")
let enemiesContinueButtonElement = document.getElementById("enemies-continue")
let battleContinueButtonElement = document.getElementById("battle-continue")
let rankingResetButtonElement = document.getElementById("ranking-reset")
/* continue button PLAYER */
playerContinueButtonElement.addEventListener("click", () => showScene("scene-shop"))
/* continue button SHOP */
shopContinueButtonElement.addEventListener("click", () => {
    showScene("scene-player-inventory");
    PLAYER.showPlayer(document.getElementById("scene-player-inventory"))
})
/* continue button PLAYER-INVENTORY */
playerInventoryContinueButtonElement.addEventListener("click", () => {
    showScene("scene-enemies")
    let enemiesElement = document.getElementById("enemies")
    let finalBossesElement = document.getElementById("final-bosses")
    ENEMIES.forEach(enemy => enemy.showEnemy(enemiesElement))
    FINAL_BOSSES.forEach(finalBoss => finalBoss.showEnemy(finalBossesElement))
})
/* continue button ENEMIES */
enemiesContinueButtonElement.addEventListener("click", () => {
    showScene("scene-battle")
    battles++
    showBattle(document.getElementById('scene-battle-container'), PLAYER, ENEMIES, FINAL_BOSSES)
})
/* continue button BATTLE */
battleContinueButtonElement.addEventListener("click", () => {
    if (battles < 3) {
        battles++
        showScene("scene-battle")
        showBattle(document.getElementById('scene-battle-container'), PLAYER, ENEMIES, FINAL_BOSSES)
    } else {
        showScene("scene-ranking")
        showRanking(document.getElementById('scene-ranking-container'), PLAYER, PROPLAYER_POINTS)
    }
})
/* reset button RANKING */
rankingResetButtonElement.addEventListener("click", () => {
    showScene("scene-player")
    reset()
    PLAYER.showPlayer(document.getElementById(initialScene))
})



