import React, { useEffect, useRef, useState } from 'react'




export default function Generator(isActive) {

    
const e = useRef()

    

    const [out, setOut] = useState("")
    const [h, setH] = useState("")

    

function gen(h) {
    
    setH(h.current.scrollHeight == undefined ? 20 : h.current.scrollHeight)
    console.log(h)
    console.log(h.current.scrollHeight)
    
    setOut(`
    import { world, Vector, MinecraftItemTypes, Items, ItemStack, MinecraftEnchantmentTypes, InventoryComponentContainer, system, Player, ItemType, EnchantmentList, Enchantment } from '@minecraft/server';
import { ActionFormData, MessageFormData, ModalFormData, ModalFormResponse } from '@minecraft/server-ui';

function getScore(target, objective) {
    try {
        const oB = world.scoreboard.getObjective(objective)
        return oB.getScore(typeof target == 'string' ? oB.getParticipants().find(pT => pT.displayName == target) : oB.getScore(target.scoreboard))
    } catch {
        return NaN
    }
}

world.events.itemStartCharge.subscribe((data) => {


    data.source.runCommandAsync('replaceitem entity @s slot.hotbar 8 air 1 0 {"minecraft:item_lock": {"mode":"lock_in_slot"},"minecraft:keep_on_death":{}}')

    if (data.itemStack.typeId == "alpha:gui") {

        /**
* @type Player
* 
*/
        const player = data.source



        formHome(player)

    }


})


function formHome(showPlayer) {
    let form = new ActionFormData()
    form.title("§3Lightning Factions §d§lGUI" );
    ${localStorage.getItem("warpSave") == null ? "" : `form.button("§d§lWarps", 'textures/items/compass_item')` }
    ${localStorage.getItem("money") == null ? "" : `form.button("§d§lMoney Transfer", 'textures/items/gold_ingot')`}
    ${localStorage.getItem("homesSave") == null ? "" : `form.button("§d§lHomes", 'textures/items/bed_red')`}
    ${localStorage.getItem("creditSave") == null ? "" : `    form.button("§d§lCredits", 'textures/items/apple_golden')`}
    form.button("§4§lClose", 'textures/blocks/barrier');
    form.show(showPlayer).then(res => {
        if(res.canceled) {
            
        } else {
            if(res.selection == 0) {
                warpForm(showPlayer)
            }
            if(res.selection == 1) {
                moneyTransfer(showPlayer)
            }
            if(res.selection == 2) {
               homeMenu(showPlayer)
            }
            if(res.selection == 3) {
                CreditsForm(showPlayer)
            }
          
            if(res.selection == 4) {

            }
            
        }
    })
}

${localStorage.getItem("money")}

${localStorage.getItem("homesSave")}

${localStorage.getItem("creditSave")}

${localStorage.getItem("warpSave")}




    `)
    
}

    let outputF = ""

    if(isActive.isActive){

        
     

  return (
    <div>
          <button type='button' onClick={() => { gen(e); }} className="wControls">Generate</button>
          <br></br>
          <button type='button' onClick={() => { navigator.clipboard.writeText(out) }} className="wControls">Copy Text</button>
<br></br>
          <textarea readOnly={true} ref={e} value={out} style={Object.assign({ height: h  + "px" }, { width: 90 + "%" }, { textAlign: 'left' })}></textarea>
          <br></br>
    </div>
  )}

   
}
