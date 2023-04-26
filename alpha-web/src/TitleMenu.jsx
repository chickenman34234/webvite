import React from 'react'

export default function TitleMenu(value) {
   
  if(value.value === "warp") {
    return(<>
        <h2>Warp Menu</h2>
    </>
    )
  }
  else if (value.value === "home") {
      return (<>
          <h2>Home Menu</h2>
      </>
      )
  }
}
