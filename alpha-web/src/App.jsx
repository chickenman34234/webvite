import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect, Component } from "react";

import { v4 } from "uuid"
import Warps from "./Warps.jsx"
import TitleMenu from './TitleMenu';
import Homes from './Homes';
import Credits from './Credits';
import MoneyTranfer from './moneyTranfer';
import Generator from './Generator';
import NavBar from './NavBar';

String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substring(index, this.length);
  }

  return string + this;
};

//Example of use:
// var something = "How you?";
// something = something.insert(3, " are");
// console.log(something)


const options = [
  {
    label: "Warp",
    value: "warp"
  },
  {
    label: "Set Homes Menu",
    value: "home"
  },
  {
    label: "Add GUI Credits Menu",
    value: "credits"
  },
  {
    label: "Money Transfer",
    value: "money"
  },
  {
    label: "Generate Code",
    value: "gen"
  }
]


function App() {

const [value, setValue] = useState("warp")

const handleChange = (event) => {
  setValue(event.target.value)
}

const warpName = useRef()
const coordinate = useRef()


  const [menuWarp, setWarp] = useState([])

function addWarp() {

  let validateCoords = coordinate.current.value.split(" ")

  
  if (warpName.current.value != "") {
  validateCoords.forEach((element, index) => {
    if (!isNaN(parseInt(element))) {
      console.log(index, validateCoords.length)
     if (index == 2 && validateCoords.length == 3) {
       setWarp(prevWarps => {
         return ([...prevWarps, { id: menuWarp.length + 1, name: warpName.current.value, coords: coordinate.current.value, canceled: false }])
       })
     } 
      if (validateCoords.length != 3) {
      
        alert("Invaid Coordinates Entered\nUse The Format x y z eg. 15 70 15")
    return;}
    } else {
      
      alert("Invaid Coordinates Entered\nUse The Format x y z eg. 15 70 15")
      return;
    }
  });
} else {
  alert("Warp Name Cannot Be Empty")
}
  
  // let newWarps = [ <textarea defaultValue="Warp Menu Button Text" id={`warp${menuWarp.length + 1}`}></textarea> ]
  // setWarp(prevWarps => {
  //   return [...prevWarps, ]
  // })
}

function clearWarp(id) {
  menuWarp.filter(warp => warp.cancled == false)
}

function removeWarp() {

}

  const [colour1, setColour1] = useState("0, 0, 0")

  let style1 = {
    borderColor: `rgb(${colour1})`,
    "&:hover": {
      borderColor: `rgb(255,255,255)`
    }
}
  let style2 = { marginRight: 2 + 'em' }
  

  const [colour2, setColour2] = useState("0, 0, 0")

  let style3 = {
    borderColor: `rgb(${colour2})`
  }
  let style4 = { marginLeft: 2 + 'em' }


function WarpControl( isActive ) {
  
  if (isActive.isActive) {
      
      return (
        <>
          <textarea type="inputs" ref={warpName} placeholder="Warp Menu Button Text" ></textarea>
          <br></br>
          <textarea type="inputs" ref={coordinate} placeholder="0 0 0" ></textarea>
          <br></br>
          <div id='cButton'>
            <button type="button" onClick={() => { addWarp() }} className="wControls" style={{marginRight: 2 + 'em' }}>Add Warp</button>
            <button type="button" onClick={() => { confirmWarp() }} className="wControls" style={{ marginLeft: 2 + 'em' }}>Confirm Warps</button>
          </div>
        </>
      )
    } else {
     
      return (<></>
          
)}
  }

  function toggleWarp(id) {
    try {
    const nWarp = [...menuWarp]
    const warp = nWarp.find(warp => warp.id === id)
    warp.canceled = !warp.canceled
    setWarp(nWarp)
} catch {
  console.log("E")
}
  }



function confirmWarp() {
 
  let output1 = `.show(showPlayer).then(res => {
    if (res.canceled) {
      formHome(showPlayer)
    } else {`

  let output2 = `function warpForm(showPlayer) {
    
    let wform = new ActionFormData()
    wform.title("§a§lWarp Form §d§lGUI")`
  menuWarp.map((menu, index) => {
    output1 += `
    ` + `if(res.selection == ${index}) {showPlayer.runCommandAsync("tp @s ${menu.coords}")}`

    output2 += `
    ` + `.button("${menu.name}")`

    if((menuWarp.length -1) == index){

      output1 += `}   })

}`

    console.log(output2, output1)
      localStorage.setItem("warpSave", output2 += output1)
      setWarp([])
  }
  })
}

function handleOption(e, form) {
  if(e === "warp") {
    
    return true
  } else return false


}

  
  

  
  
  return (
    <>
    <div className="App">
      <h1>
        Minecraft Bedrock Edition GUI Generator
      </h1>
      <div className="select-container">
        <select value={value} onChange={handleChange} id="selectStyle">
          {options.map((option) => (
            <option key={v4()} value={option.value}>{option.label}</option>
        ))}
        </select>
        <br></br>
        
        <TitleMenu value={value}/>
      </div>
      <div>
        <WarpControl isActive={handleOption(value)}/>
        <Warps warp={menuWarp} value={value} isActive={handleOption(value)} toggleWarp={toggleWarp}/>
        <Homes isActive={value == "home" ? true : false}></Homes>
        <Credits isActive={value == "credits" ? true : false}></Credits>
        <MoneyTranfer isActive={value == "money" ? true : false}></MoneyTranfer>
        <Generator isActive={value == "gen" ? true : false}></Generator>
      </div>
    </div>
    </>
  );


}


export default App;
