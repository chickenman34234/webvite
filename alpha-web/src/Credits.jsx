import React, { useRef } from 'react'

export default function Credits(isActive) {
    const credit = useRef()
    console.log("re")
    if(isActive.isActive) {
   
    function addCredits() {
        let output = `function CreditsForm(showPlayer) {
            let form = new ActionFormData()

    form.title("§3Credits");
    form.body(\`${credit.current.value}\`)
    form.button("§4§lClose");
    form.show(showPlayer).then(res => {
        if (res.canceled) {
            formHome(showPlayer)
        } else {
            formHome(showPlayer)

        }
    })
}`
    console.log(output)
    localStorage.setItem("creditSave", output)

    }
  return (
    <div>
        <br></br>
          <textarea type="inputs" ref={credit} placeholder="Credits Here" style={{height: 10 + "em"}} ></textarea>
          <br></br>
          <button type='button' id="subButton" onClick={() => addCredits()}>Save</button>
   </div>
  )}
}
