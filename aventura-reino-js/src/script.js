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
let initialScene = "scene-form"
showScene(initialScene)
//PLAYER.showPlayer(document.getElementById(initialScene))

let ataque = 0
let defensa = 0
let vida = 100
let puntos = 10

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
    PLAYER.dinero = copyPLAYER.dinero
    /* reset SHOP */
    SHOP.length = 0
    copySHOP.forEach(product => SHOP.push(product.clone()))
    /* reset battle counter and inventory */
    battleCounter = 0
    footerInventoryItemElements.forEach(item => item.innerHTML = "")
    /* New rarity and discount */
    rarity = randomRarity()
    discount = randomDiscount()

    ataque = 0
    defensa = 0
    vida = 100
    puntos = 10
    nombreFormInput.value = ''
    ataqueFormLabel.innerHTML = ataque
    defensaFormLabel.innerHTML = defensa
    vidaFormLabel.innerHTML = vida
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


/* continue button FORM */
let formContinueButtonElement = document.getElementById("form-continue")

let ataqueFormButton = document.getElementById("boton-ataque")
let defensaFormButton = document.getElementById("boton-defensa")
let vidaFormButton = document.getElementById("boton-vida")
let ataqueMenosFormButton = document.getElementById("boton-ataque-menos")
let defensaMenosFormButton = document.getElementById("boton-defensa-menos")
let vidaMenosFormButton = document.getElementById("boton-vida-menos")

let nombreFormInput = document.getElementById('nombre-form')

let ataqueFormLabel = document.getElementById("ataque-form")
let defensaFormLabel = document.getElementById("defensa-form")
let vidaFormLabel = document.getElementById("vida-form")

ataqueFormLabel.innerHTML = ataque
defensaFormLabel.innerHTML = defensa
vidaFormLabel.innerHTML = vida

ataqueFormButton.addEventListener('click', () => {
    if ((puntos) > 0) {
        ataque++
        puntos--
        ataqueFormLabel.innerHTML = ataque
    }
})
defensaFormButton.addEventListener('click', () => {
    if ((puntos) > 0) {
        defensa++
        puntos--
        defensaFormLabel.innerHTML = defensa
    }
})
vidaFormButton.addEventListener('click', () => {
    if ((puntos) > 0) {
        vida++
        puntos--
        vidaFormLabel.innerHTML = vida
    }
})

ataqueMenosFormButton.addEventListener('click', () => {
    if (ataque > 0) {
        ataque--
        puntos++
        ataqueFormLabel.innerHTML = ataque
    }
})
defensaMenosFormButton.addEventListener('click', () => {
    if (defensa > 0) {
        defensa--
        puntos++
        defensaFormLabel.innerHTML = defensa
    }
})
vidaMenosFormButton.addEventListener('click', () => {
    if (vida > 100) {
        vida--
        puntos++
        vidaFormLabel.innerHTML = vida
    }
})

formContinueButtonElement.addEventListener('click', () => {
    if (puntos == 0 && PLAYER.nombreOk(nombreFormInput.value)) {
        PLAYER.inicializar(nombreFormInput.value, ataque, defensa, vida)
        showScene("scene-player")
        PLAYER.showPlayer(document.getElementById("scene-player"))
    }
})

/* continue button PLAYER */
playerContinueButtonElement.addEventListener("click", () => {
    showScene("scene-shop")
    let shopElement = document.getElementById('shop')
    shopElement.innerHTML = ""; /* Delete previous shop */
    document.getElementById('discount').innerText = discount
    document.getElementById('rarity').innerText = rarity
    applyDiscount(SHOP, rarity, discount)
    showShop(shopElement, SHOP)
    let dineroLabel = document.getElementById('dinero-shop')
    dineroLabel.innerHTML = `Monedero: ${PLAYER.dinero.toFixed(2)} $`
    /* add evetListener to all buttons */
    let buyButtonsElements = document.querySelectorAll("#shop button")
    buyButtonsElements.forEach(buyButton => {
        buyButton.addEventListener("click", () => {
            if (shopElement.querySelector('#' + buyButton.parentElement.id).classList.contains('bought')) {
                PLAYER.removeProduct(findProduct(SHOP, buyButton.parentElement.id))
                shopElement.querySelector('#' + buyButton.parentElement.id).classList.toggle('bought')
                buyButton.innerHTML = 'Comprar'
                dineroLabel.innerHTML = `Monedero: ${PLAYER.dinero.toFixed(2)} $`
            } else {
                if (PLAYER.buyProduct(findProduct(SHOP, buyButton.parentElement.id))) {
                    shopElement.querySelector('#' + buyButton.parentElement.id).classList.toggle('bought')
                    buyButton.innerHTML = 'Retirar'
                    dineroLabel.innerHTML = `Monedero: ${PLAYER.dinero.toFixed(2)} $`
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
        localStorage.setItem(PLAYER.name, `Nombre: ${PLAYER.name} - ${PLAYER.points} puntos - ${PLAYER.dinero.toFixed(2)}$`)
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
let verRankingButton = document.getElementById('ver-ranking')
verRankingButton.addEventListener('click', () => {
    console.log(localStorage.getItem(PLAYER.name))
})
rankingResetButtonElement.addEventListener("click", () => {
    showScene("scene-form")
    reset()
    PLAYER.showInventory(footerInventoryItemElements)
})




