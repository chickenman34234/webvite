import React from 'react'

export default function MoneyTranfer(isActive) {
  let on = true
  function toggle() {
    
    if(on){
      on = false
     
   localStorage.setItem("money", `function moneyTransfer(showPlayer) {

    let playerList = []
    for (let players of world.getPlayers()) {
        playerList.push(players.name)
    }

    let playerSelectForm = new ModalFormData()
        .title("§eTranfer Money")
        .slider("Amount", 1, 100000, 1000, 1)
        .dropdown("Player", playerList, 0)
        .show(showPlayer).then(res => {
            if (res.canceled) {
                formHome(showPlayer)
            } else {
                let selection = res.formValues
                console.warn(res.formValues)

                if (selection[1] === 0) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[0], selection[0])
                }
                if (selection[1] === 1) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[1], selection[0])
                }
                if (selection[1] === 2) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[2], selection[0])
                }
                if (selection[1] === 3) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[3], selection[0])
                }
                if (selection[1] === 4) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[4], selection[0])
                }
                if (selection[1] === 5) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[5], selection[0])
                }
                if (selection[1] === 6) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[6], selection[0])
                }
                if (selection[1] === 7) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[7], selection[0])
                }
                if (selection[1] === 8) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[8], selection[0])
                }
                if (selection[1] === 9) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[9], selection[0])
                }
                if (selection[1] === 10) {
                    console.warn(res.formValues)
                    moneyTransferFinal(showPlayer.name, playerList[10], selection[0])
                }
            }
        })
}

/**
 * Tranfer selected amount of money
 * @param {String} sender Sender Player
 * @param {String} player Player 
 * @param {Number} amount Amount to Send
 */

function moneyTransferFinal(sender, player, amount) {


    if (getScore(sender, "money") < amount) {
        world.getDimension("overworld").runCommandAsync('tellraw "$\{sender}" { "rawtext": [{ "text": "§eYou Dont Have Enough Money For That" }] }')

    } else {

        world.getDimension("overworld").runCommandAsync('scoreboard players remove "$\{sender}" money $\{ amount }')
        world.getDimension("overworld").runCommandAsync('scoreboard players add "$\{player}" money $\{ amount }')

        world.getDimension("overworld").runCommandAsync('tellraw "$\{sender}" { "rawtext": [{ "text": "§eYou Sent $$\{amount} To $\{player}" }] }')
        world.getDimension("overworld").runCommandAsync('tellraw "$\{player}" { "rawtext": [{ "text": "§e$\{sender} Sent $$\{amount} To You" }] }')

    }

}`)} else {
  on = true
        localStorage.setItem("money", " ")
}
  }
    if(isActive.isActive){
  return (
    <div>
      <br></br>
        <label className='switch'>
            <input type={'checkbox'} onChange={() =>toggle()}></input>
            <span class="slider"></span>
        </label>
    </div>
  )}
}
