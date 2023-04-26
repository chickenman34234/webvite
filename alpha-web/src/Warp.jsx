import React from 'react'

export default function Warp({ warp, menu, coords }) {


  return (
    <div id='warps'>
         {menu}. {warp} - {coords}
    </div>
  )
}
