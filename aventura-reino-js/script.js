import { PROPLAYER_POINTS, PLAYER, ENEMIES, FINAL_BOSSES, SHOP } from './utils/constants.js';
import { showScene } from './utils/scene.js';
import { showBattle } from './modules/battle.js'
import { Enemy, FinalBoss } from './modules/enemies.js'
import { filterShop, findProduct, applyDiscount, showShop } from './modules/shop.js'
import { Player } from './modules/player.js'
import { Product } from './modules/product.js'
import { showRanking } from './modules/ranking.js'

/* Init */
let copy = structuredClone(PLAYER)
let battleCounter = 0
let initialScene = "scene-player"
showScene(initialScene)
PLAYER.showPlayer(document.getElementById(initialScene))

/* Reset */
function reset() {
    PLAYER.points = copy.points
    PLAYER.hp = copy.hp
    PLAYER.inventory = [...copy.inventory]
    PLAYER.attack = copy.attack
    PLAYER.defense = copy.defense
    battleCounter = 0
    footerInventoryItemElements.forEach(item => item.innerHTML = "")
}

/* footer inventory */
let footerInventoryItemElements = document.querySelectorAll('#inventory-container .item')

/* CONTINUE and RESET buttons */
let playerContinueButtonElement = document.getElementById("player-continue")
let shopContinueButtonElement = document.getElementById("shop-continue")
let playerInventoryContinueButtonElement = document.getElementById("player-inventory-continue")
let enemiesContinueButtonElement = document.getElementById("enemies-continue")
let battleContinueButtonElement = document.getElementById("battle-continue")
let rankingResetButtonElement = document.getElementById("ranking-reset")

/* continue button PLAYER */
playerContinueButtonElement.addEventListener("click", () => {
    showScene("scene-shop")
    let shopElement = document.getElementById('shop')
    shopElement.innerHTML = ""; /* Delete previous shop */
    showShop(shopElement, SHOP)
    /* add evetListener to all buttons */
    let buyButtonsElements = document.querySelectorAll("#shop button")
    buyButtonsElements.forEach(buyButton => {
        buyButton.addEventListener("click", () => {
            PLAYER.buyProduct(findProduct(SHOP, buyButton.parentElement.id))
            PLAYER.showInventory(footerInventoryItemElements)
        })
    })
})

/* continue button SHOP */
shopContinueButtonElement.addEventListener("click", () => {
    showScene("scene-player-inventory");
    PLAYER.updateStats()
    PLAYER.showPlayer(document.getElementById("scene-player-inventory")) /* show player info */
})

/* continue button PLAYER-INVENTORY */
playerInventoryContinueButtonElement.addEventListener("click", () => {
    showScene("scene-enemies")
    /* get and clean nodes */
    let enemiesElement = document.getElementById("enemies")
    enemiesElement.innerHTML = ""
    let finalBossesElement = document.getElementById("final-bosses")
    finalBossesElement.innerHTML = ""
    /* fill nodes */
    ENEMIES.forEach(enemy => enemy.showEnemy(enemiesElement))
    FINAL_BOSSES.forEach(finalBoss => finalBoss.showEnemy(finalBossesElement))
})

/* continue button ENEMIES */
enemiesContinueButtonElement.addEventListener("click", () => {
    showScene("scene-battle")
    battleCounter++
    showBattle(document.getElementById('scene-battle-container'), PLAYER, ENEMIES, FINAL_BOSSES, battleCounter)
})
/* continue button BATTLE */
battleContinueButtonElement.addEventListener("click", () => {
    if (battleCounter < 3) {
        battleCounter++
        showScene("scene-battle")
        showBattle(document.getElementById('scene-battle-container'), PLAYER, ENEMIES, FINAL_BOSSES, battleCounter)
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
    PLAYER.showInventory(footerInventoryItemElements)
})



