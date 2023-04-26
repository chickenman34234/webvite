import React, {useRef, useState} from 'react'
import TitleMenu from './TitleMenu'
import { v4 } from "uuid"



export default function Homes(isActive) {

    function buttons(value) {

        let out = ""
        for (let i = 1; i <= value; i++) {
              out +=  `
                 aForm.button('§aSet Spawnpoint ${i}')
                 aForm.button('§aTP Spawnpoint ${i}')`
            if(i == value) {
                return out
            }
    }
}

    const [value, setValue] = useState("1")

    const amount = useRef()



    const handleChange = (event) => {
        setValue(event.target.value)
    }

    if(isActive.isActive){

        let output = `function homeMenu(showPlayer) {
    let aForm = new ActionFormData()
    aForm.title('§bLightning Home Warps')` + 
   buttons(value)

    
    + `
   
    aForm.show(showPlayer).then((res) => {
        if (res.canceled) {

            formHome(showPlayer)
        }
        `


        

        function confirmAmount() {
            console.log("E",value)
let x = 0
            for(let i = 0; i <= ((  value * 2) - 2); i += 2) {
                x++
                console.log("E", value , value * 2, i, x)
                output += `if (res.selection === ${i}) {
            let tags = showPlayer.getTags()
            console.warn(tags, tags.length)

            for (let i = 0; i <= tags.length; i++) {


                if (i === tags.length) {

                    showPlayer.runCommandAsync('tag @s add "customs${x}:$\{showPlayer.location.x} $\{showPlayer.location.y} $\{showPlayer.location.z}"')

                }

                if (tags[i].includes("customs${x}:")) {

                    let tag = tags[i]


                    showPlayer.runCommandAsync('tag @s remove "$\{tag}"')


                }

            }



        }
        if (res.selection === ${i + 1}) {
            let tags = showPlayer.getTags()

            for (let i = 0; i <= tags.length; i++) {

                if (tags[i].includes("customs${x}:")) {

                    let customs = tags[i].replace("customs${x}:", "")

                    showPlayer.runCommandAsync('tp $\{customs}')

                }

            }
        }`


        if(i == (value * 2) -2 ) {
            
            console.log(output + `}}`)
            localStorage.setItem("homesSave", output.replaceAll("'", "`") + `})}`)
        }
            }

           
        }

        const options = [
            {
                label: "1 Home",
                value: "1"
            },
            {
                label: "2 Homes",
                value: "2"
            },
            {
                label: "3 Homes",
                value: "3"
            },
            {
                label: "4 Homes",
                value: "4"
            },
            {
                label: "5 Homes",
                value: "5"
            },
            {
                label: "6 Homes",
                value: "6"
            },
            {
                label: "7 Homes",
                value: "7"
            },
            {
                label: "8 Homes",
                value: "8"
            },
            {
                label: "9 Homes",
                value: "9"
            },
            {
                label: "10 Homes",
                value: "10"
            },
        ]
        
  return (
    
    <div>
          <div className="select-container">
            <h2>Select Amount Of Home Warps</h2>
             
              <select value={value} ref={amount} onChange={handleChange} id="selectStyle">
                  {options.map((option) => (
                      <option key={v4()} value={option.value}>{option.label}</option>
                  ))}
              </select>
              <br></br>
              <button id="subButton" type="submit" onClick={(e) => { confirmAmount() }}>Submit</button>
              
          </div>
    </div>
  )}
}
