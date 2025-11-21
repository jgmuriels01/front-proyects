import { PROPLAYER_POINTS, PLAYER, ENEMIES, FINAL_BOSSES, SHOP } from '../utils/constants.js';
import { showScene } from '../utils/scene.js';
import { showBattle } from '../modules/battle.js'
import { findProduct, applyDiscount, showShop, randomRarity, randomDiscount } from '../modules/shop.js'
import { showRanking } from '../modules/ranking.js'

/* Init */
/* init copies */
let copyPLAYER = structuredClone(PLAYER)
let copySHOP = []
SHOP.forEach(product => copySHOP.push(product.clone()))
/* init game settings */
let battleCounter = 0
let rarity = randomRarity()
let discount = randomDiscount()
/* init and set scene */
let initialScene = "scene-player"
showScene(initialScene)
PLAYER.showPlayer(document.getElementById(initialScene))

/* Reset */
/**
 * Reset game to its initial status
 * (player, shop, battle counter, random rarity and random discount)
 */
function reset() {
    /* reset PLAYER */
    PLAYER.points = copyPLAYER.points
    PLAYER.hp = copyPLAYER.hp
    PLAYER.maxHp = copyPLAYER.maxHp
    PLAYER.inventory = [...copyPLAYER.inventory]
    PLAYER.attack = copyPLAYER.attack
    PLAYER.defense = copyPLAYER.defense
    /* reset SHOP */
    SHOP.length = 0
    copySHOP.forEach(product => SHOP.push(product.clone()))
    /* reset battle counter and inventory */
    battleCounter = 0
    footerInventoryItemElements.forEach(item => item.innerHTML = "")
    /* New rarity and discount */
    rarity = randomRarity()
    discount = randomDiscount()
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
    document.getElementById('discount').innerText = discount
    document.getElementById('rarity').innerText = rarity
    applyDiscount(SHOP, rarity, discount)
    showShop(shopElement, SHOP)
    /* add evetListener to all buttons */
    let buyButtonsElements = document.querySelectorAll("#shop button")
    buyButtonsElements.forEach(buyButton => {
        buyButton.addEventListener("click", () => {
            if (shopElement.querySelector('#' + buyButton.parentElement.id).classList.contains('bought')) {
                PLAYER.removeProduct(findProduct(SHOP, buyButton.parentElement.id))
                shopElement.querySelector('#' + buyButton.parentElement.id).classList.toggle('bought')
                buyButton.innerHTML = 'Comprar'
            } else {
                if (PLAYER.buyProduct(findProduct(SHOP, buyButton.parentElement.id))) {
                    shopElement.querySelector('#' + buyButton.parentElement.id).classList.toggle('bought')
                    buyButton.innerHTML = 'Retirar'
                }
            }
            footerInventoryItemElements.forEach(item => item.innerHTML = "")
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
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
})
/* reset button RANKING */
rankingResetButtonElement.addEventListener("click", () => {
    showScene("scene-player")
    reset()
    PLAYER.showPlayer(document.getElementById(initialScene))
    PLAYER.showInventory(footerInventoryItemElements)
})




